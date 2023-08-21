import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import './App.css';
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact 
          // elements={<Navigate to="/home" replace={true}/>}
          element={<LandingPage/>} />
          <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
