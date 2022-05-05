import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/http";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import Modal from "./../../components/Modal";
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
  const [isModalVisible, setModalVisibility] = useState(false);
  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];
  
  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
    
  }, [movieId]);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 1500);
  }, [isModalVisible]);

  return (
    <div className={styles.EditMovie}>
      <div className={styles.EditMovie__upperBar}></div>
      <div className={styles.EditMovie__wrapper}>
        <CardItem cardData={movieData} />
        <CreateCardForm setModalVisibility={setModalVisibility} callType="PUT" />
        <Modal
          text="Movie edited correctly!"
          isVisibile={isModalVisible}
      />
        <Redirect />
      </div>
    </div>
  );
  
}

export default EditMovie;
