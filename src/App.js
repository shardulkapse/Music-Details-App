import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/UI/Sidebar";
import Main from "./components/UI/Main";

function App() {
  const isLoading = useSelector((state) => state.main.isLoading);

  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
