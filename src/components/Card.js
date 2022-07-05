export function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-card">
      <img className="photo-card__image" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
      <button className="photo-card__delete-button"/>
      <div className="photo-card__wrap">
        <h2 className="photo-card__title">{props.card.name}</h2>
        <div className="photo-card__like-wrapper">
          <button className="photo-card__like-button"/>
          <p className="photo-card__like-counter">
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </li>
  )
}
