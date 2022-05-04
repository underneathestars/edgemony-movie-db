import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/http";

import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./styles.module.scss";

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
      </div>
    </div>
  );
  
  
}

export default EditMovie;
