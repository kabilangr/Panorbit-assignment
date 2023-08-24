import { Routes, Route, Navigate, useNavigate} from "react-router-dom"
import './App.css';
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home";
import { useEffect } from "react";
import {  IS_USER_LOGGED_IN } from "../src/utils/Constant";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Gallery from "./components/Gallery/Gallery";
import ToDo from "./components/ToDo/ToDo";
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={PrivateRoute(<Navigate to="/home" replace={true}/> ,<LandingPage/>)} />
          <Route path="home" element={PrivateRoute(<Home/> ,<Navigate to="/" replace={true}/>)}>
            <Route path="" element={<Navigate to="profile" replace={true}/>} />
            <Route path="profile" element={<Profile/>}/>
            <Route path="posts" element={<Posts/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="todo" element={<ToDo/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
