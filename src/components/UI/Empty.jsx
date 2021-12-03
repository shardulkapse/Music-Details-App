import classes from "./Empty.module.css";
function Empty() {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <h2>
          Welcome to Muz<span>i</span>c.
        </h2>
        <p>Discover hit tracks created by your favorite artists.</p>
      </div>
      <div className={classes.waves}></div>
    </section>
  );
}

export default Empty;
