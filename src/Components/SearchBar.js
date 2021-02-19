import React, { useState } from "react";
import "../SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from '@material-ui/icons/Mic';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

const SearchBar = ({ hideSearchBtns = false }) => {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState();
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log(`You hit the search btn | SEARCH TERM : ${input}`);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <form className="searchBar">
      <div className="searchBar__input">
        <SearchIcon />
        <input
          id="int"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideSearchBtns ? (
        <div className="searchBar__btns">
          <Button id="btn" variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button id="btn" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="searchBar__btns">
          <Button
            id="btn"
            className="searchBar__btns--hidden"
            variant="outlined"
            type="submit"
            onClick={search}
          >
            Google Search
          </Button>
          <Button
            id="btn"
            variant="outlined"
            className="searchBar__btns--hidden"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
