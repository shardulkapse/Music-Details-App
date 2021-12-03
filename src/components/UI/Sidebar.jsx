import classes from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { mainSliceActions } from "../../redux/slices/mainSlice";
import { useSelector } from "react-redux";
function Sidebar() {
  const dispatch = useDispatch();
  const recent = useSelector((state) => state.main.recentSearches);

  return (
    <div className={classes.sidebar}>
      <h1
        onClick={() => {
          dispatch(mainSliceActions.setSongs());
          dispatch(mainSliceActions.setLoadingIsFalse());
        }}
      >
        Muz<span>i</span>c
      </h1>

      <p>Created using ReactJS</p>
    </div>
  );
}

export default Sidebar;
