import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import { Card } from './Card';

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)

        setCards(cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick}/>))

      })
      .catch((err) => console.log(`Error: ${err}`))
  }, [onCardClick])

  function handleEditAvatarClick() {
    onEditAvatar()
  }

  function handleEditProfileClick() {
    onEditProfile()
  }

  function handleAddPlaceClick() {
    onAddPlace()
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__content">
            <button className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}
                    onClick={handleEditAvatarClick}/>
            <div className="profile__info">
              <div className="profile__wrap">
                <h1 className="profile__title">{userName}</h1>
                <button
                  className="profile__edit-button"
                  aria-label="Редактировать"
                  onClick={handleEditProfileClick}
                />
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button className="profile__add-button" aria-label="Добавить" onClick={handleAddPlaceClick}/>
        </section>
        <section>
          <ul className="photo-cards">
            {cards}
          </ul>
        </section>
      </main>
    </>
  )
}
