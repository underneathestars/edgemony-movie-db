import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateCardForm from "./../../components/CreateCardForm";
import Modal from "./../../components/Modal";
import styles from "./styles.module.scss";

function AddMovie() {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 1500);
  }, [isModalVisibile]);

  navigate("/");

  return (
    <div className={styles.AddMovie}>
      <div className={styles.AddMovie__upperBar}></div>
      <h1>ADD NEW MOVIE</h1>
      <div className={styles.AddMovie__wrapper}>
          <CreateCardForm setModalVisibility={setModalVisibility} callType="POST" />
          <img src="https://i.ibb.co/3d79VFj/popcorn.png" alt="popcorn" border="0"/>
      </div>
      <Modal
        text="New Movie Added!"
        isVisibile={isModalVisibile}
      />
    </div>
  );
}

export default AddMovie;
