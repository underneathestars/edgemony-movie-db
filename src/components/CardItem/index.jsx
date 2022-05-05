import { Link } from "react-router-dom";
import { DELETE } from "../../utils/http";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function CardItem({ cardData, onForceRender }) {
  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender("/"));
  };

  return (
    <div className={styles.CardItem}>
      <Link to={`/edit-movie/${cardData.id}`}>
        <FontAwesomeIcon icon={solid("pen-to-square")} />
      </Link>
      <h2>{cardData.title}</h2>
      <button onClick={onCardDelete} className={styles.CardItem__btn}>
        <FontAwesomeIcon icon={solid("xmark")} />
      </button>
      <p className={styles.CardItem__year}>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p className={styles.CardItem__desc}>{cardData.description}</p>
      <div className={styles.genres}>
        <ul>
          {cardData && Array.isArray(cardData.genres) ? (
            cardData.genres.map((genre, index) => <li key={index}>{genre}</li>)
          ) : (
            <li>{cardData.genres}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
