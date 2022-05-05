import { useState } from "react";
import { useLocation } from "react-router-dom";
import { POST, PUT } from "../../utils/http";
import "./style.scss";

function CreateCardForm({ setModalVisibility, callType }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");

  const location = useLocation();
  const movieId = location.pathname.split("/").reverse()[0];

  const unStringifyGenres = (genres) => genres.split(",");

  const addNewMovie = async (e) => {
    e.preventDefault();

    if (callType === "POST") {
        await POST({
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });

      setModalVisibility(true);
    } else {
      await PUT(movieId, {
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });
    }
  };

  return (
    <div className="CreateCardForm">
      <form onSubmit={addNewMovie} className="CreateCardForm__form">
        <label htmlFor="title">TITLE:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          required
        />

        <label htmlFor="year">YEAR:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          required
        />

        <label htmlFor="poster">POSTER:</label>
        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          required
        />

        <label htmlFor="genres">GENRES:</label>
        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          required
        />

        <label htmlFor="description">DESCRIPTION:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          required
        />

        <input className="input_btn" type="submit" value="SEND IT" />
      </form>
    </div>
  );
}

export default CreateCardForm;
