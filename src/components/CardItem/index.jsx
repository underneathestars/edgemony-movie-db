import { Link } from "react-router-dom";
import { DELETE } from "../../utils/http";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function CardItem({ cardData, onForceRender }) {
  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender("/"));
  };

  return (
    <div className={styles.CardItem}>
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <button onClick={onCardDelete} className={styles.CardItem__btn}>
      <FontAwesomeIcon icon={solid('xmark')} />
      </button>
      <p className={styles.CardItem__year}>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p>{cardData.description}</p>
      <div className={styles.genres}>
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i}>{genre.toUpperCase()}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
