import classes from "./Main.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { useRef } from "react";
import { mainSliceActions } from "../../redux/slices/mainSlice";
import axios from "axios";
import Songs from "./Songs";
import Empty from "./Empty";

function Main() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.main.isLoading);
  const songs = useSelector((state) => state.main.songs);
  const inputArtistRef = useRef();

  console.log(songs);

  const fetchArtistDataHandler = () => {
    dispatch(mainSliceActions.setLoadingIsTrue());
    const enteredName = inputArtistRef.current.value;
    dispatch(mainSliceActions.addRecent(enteredName));
    dispatch(mainSliceActions.setArtist(enteredName));
    const options = {
      method: "GET",
      url: "https://genius.p.rapidapi.com/search",
      params: { q: enteredName },
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "dee324d1d3msh7653db62503ed46p189dbbjsn0a2335d42232",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        dispatch(mainSliceActions.setSongs(response.data.response.hits));
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => dispatch(mainSliceActions.setLoadingIsFalse()));
  };

  return (
    <div className={classes.main}>
      {/* Search Section */}
      <div className={classes.inputBox}>
        <input placeholder="Search for an Artist" ref={inputArtistRef} />
        <button onClick={fetchArtistDataHandler} className={classes.btn}>
          Search
        </button>
        <button>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
          >
            You are Welcome!!
          </a>
        </button>
      </div>

      {/* Main content */}
      <div className={classes.contentBox}>
        {isLoading && <Loading />}
        {!isLoading && songs?.length > 0 && <Songs />}
        {!isLoading && songs?.length === 0 && <h2>No Artist Found :(</h2>}
        {!isLoading && !songs && <Empty />}
      </div>
    </div>
  );
}

export default Main;
