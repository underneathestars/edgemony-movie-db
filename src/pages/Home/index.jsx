import { useState } from "react";
import CardList from "../../components/CardList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./style.scss";

function Home() {

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="Home">
      <div className="Home__search">
        <label htmlFor="search"><FontAwesomeIcon icon={solid('magnifying-glass')} /></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <CardList searchInput={searchInput} />
    </div>
  );
}

export default Home;
