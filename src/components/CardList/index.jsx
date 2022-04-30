import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import CardItem from "../CardItem";
import "./style.scss";

function CardList({ searchInput }) {
  const [moviesData, setMoviesData] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    GET().then((data) => setMoviesData(data));
  }, [value]);

  return (
    <div className="CardList">
      <h1 className="CardList__title">MOVIE LIST</h1>
      <div className="CardList__wrapper">
        {moviesData &&
          moviesData
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(searchInput.toLowerCase().trim())
            )
            .map((movie) => (
              <CardItem
                cardData={movie}
                onForceRender={setValue}
                key={movie.id}
              />
            ))}
      </div>
    </div>
  );
}

export default CardList;
