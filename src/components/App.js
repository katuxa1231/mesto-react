import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupVisibility] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupVisibility] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupVisibility] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  function onEditProfile() {
    setEditProfilePopupVisibility(true)
  }

  function onAddPlace() {
    setAddPlacePopupVisibility(true)
  }

  function onEditAvatar() {
    setEditAvatarPopupVisibility(true)
  }

  function closeAllPopups() {
    setEditProfilePopupVisibility(false)
    setAddPlacePopupVisibility(false)
    setEditAvatarPopupVisibility(false)
    setSelectedCard(null)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar}
            onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                     buttonText="Создать">
        <div className="form__input-wrapper">
          <input
            id="place-input"
            name="name"
            className="form__input form__input-place"
            type="text"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="place-input-error form__input-error"/>
        </div>
        <div className="form__input-wrapper">
          <input
            id="url-input"
            name="link"
            className="form__input form__input-url"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="url-input-error form__input-error"/>
        </div>
      </PopupWithForm>
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                     buttonText="Сохранить">
        <div className="form__input-wrapper">
          <input
            id="name-input"
            name="name"
            className="form__input form__input-name"
            type="text"
            required=""
            minLength={2}
            maxLength={40}
            placeholder="Имя"
          />
          <span className="name-input-error form__input-error"/>
        </div>
        <div className="form__input-wrapper">
          <input
            id="job-input"
            name="info"
            className="form__input form__input-job"
            type="text"
            required=""
            minLength={2}
            maxLength={200}
            placeholder="Дополнительная информация"
          />
          <span className="job-input-error form__input-error"/>
        </div>
      </PopupWithForm>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                     buttonText="Сохранить">
        <div className="form__input-wrapper">
          <input
            id="avatar-url"
            name="avatar"
            className="form__input"
            type="url"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="avatar-url-error form__input-error"/>
        </div>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} buttonText="Да"></PopupWithForm>
      <ImagePopup card={selectedCard} handleCloseButtonClick={closeAllPopups}/>
    </div>

  );
}

export default App;
