import classes from "./Song.module.css";
function Song({ song, order }) {
  return (
    <div className={classes.song}>
      <div className={classes.cont}>
        <p>{order + 1}</p>
        <img src={song.song_art_image_thumbnail_url} />
        <div className={classes.nameInfo}>
          <h3>{song.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Song;
