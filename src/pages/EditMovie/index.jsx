import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/http";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./styles.module.scss";

function Redirect() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/")
  }
  return (
   <div className={styles.btn}>
    <button className={styles.btn__btn} onClick={handleClick}>GO BACK</button>
  </div>
  );
};


function EditMovie() {
  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];
  

  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
    
  }, [movieId]);

  return (
    <div className={styles.EditMovie}>
      <div className={styles.EditMovie__upperBar}></div>
      <div className={styles.EditMovie__wrapper}>
        <CardItem cardData={movieData} />
        <CreateCardForm setModalVisibility={false} callType="PUT" />
        <Redirect />
      </div>
    </div>
  );
  
  
}

export default EditMovie;
