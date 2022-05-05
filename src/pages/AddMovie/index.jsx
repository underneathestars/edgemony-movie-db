import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateCardForm from "./../../components/CreateCardForm";
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

function AddMovie() {
  const [isModalVisible, setModalVisibility] = useState(false);
 

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 1500);
  }, [isModalVisible]);

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
        isVisibile={isModalVisible}
      />
      <Redirect/>
    </div>
  );
}

export default AddMovie;
