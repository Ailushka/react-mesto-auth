import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute.js';
import api from '../utils/api.js';
import auth from '../utils/auth.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [infoTooltip, setInfoTooltip] = useState(false);
  const history = useHistory();

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
  })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
  })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    tokenCheck();
  });

  function handleUpdateUser(user) {
    api.patchUserInfo(user)
      .then(data => setCurrentUser(data))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserAvatar(avatar)
      .then(data => setCurrentUser(data))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.toggleLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
        .then(
            setCards(cards.filter(i => i._id !== card._id))
        )
        .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(item) {
    api.postCard(item)
      .then((newCard) => {
        setCards([...cards, newCard]);
      })
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsInfoTooltipOpen(false);
  }

  function onLogin(email, password) {
    auth.signin(password, email)
      .then((res) => {
        if(res) {
          setLoggedIn(true);
          setCurrentUserEmail(email);
          localStorage.setItem('jwt', res.token);
          history.push('/');
        } else {
          setIsInfoTooltipOpen(true);
          setInfoTooltip(false);
        }
      })
      .catch(err => console.log(err))
  }

  function onRegister(email, password) {
    auth.signup(password, email)
      .then((res) => {
        setIsInfoTooltipOpen(true);
        if(res) {
          setInfoTooltip(true);
          history.push('/sign-in');
        } else {
          setInfoTooltip(false);
        }
      })
      .catch(err => console.log(err))
  }

  function onLogOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  function tokenCheck() {
    if(localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      if(token) {
        auth.getContent(token)
          .then((res) => {
            if(res) {
              setCurrentUserEmail(res.data.email);
            };
            setLoggedIn(true);
            history.push('/');
          })
          .catch(err => console.log(err))
      }
    }
  }

  return (

      <CurrentUserContext.Provider value={currentUser}>
        <Header
          currentUserEmail={currentUserEmail}
          onLogOut={onLogOut}
        />
        <Switch>
          <ProtectedRoute
            exact path='/'
            loggedIn={loggedIn}
            component={Main}
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <ProtectedRoute
            exact path='/'
            loggedIn={loggedIn}
            component={Footer}
          />
          <Route path='/sign-up'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/sign-in'>
            <Login onLogin={onLogin} />
          </Route>
          <Route>
            {loggedIn
              ? (<Redirect to='/'/>)
              : (<Redirect to='/sign-up'/>)
            }
          </Route>
        </Switch>
        <InfoTooltip
          status={infoTooltip}
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm-form'}
          buttonTitle={'Да'}
        >
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      </CurrentUserContext.Provider>

  );
}

export default App;
