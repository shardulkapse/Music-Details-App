import classes from "./Songs.module.css";
import { useSelector } from "react-redux";
import Song from "./Song";
function Songs() {
  const songs = useSelector((state) => state.main.songs);
  const artist_name = useSelector((state) => state.main.reqArtist);

  return (
    <div className={classes.songs}>
      <h1>
        Top results by <span>{artist_name}</span>
      </h1>
      <div className={classes.songBox}>
        {songs?.map((song, i) => (
          <Song key={song.result.id} song={song.result} order={i} />
        ))}
      </div>
    </div>
  );
}

export default Songs;
