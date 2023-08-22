import { Routes, Route, Navigate, useNavigate} from "react-router-dom"
import './App.css';
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home";
import { useEffect } from "react";
import { IS_USER_LOGGED_IN } from "../src/utils/Constant";

function App() {

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = window.sessionStorage.getItem(IS_USER_LOGGED_IN)
    console.log("home",isLoggedIn)
    if(isLoggedIn) {
      navigate("/home")
    }
  },[])
  return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Navigate to="/landingPage" replace={true}/>} />
          <Route path="/landingPage" exact element={<LandingPage/>} />
          <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
