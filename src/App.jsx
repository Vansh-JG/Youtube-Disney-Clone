import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisneyNav from './components/DisneyNav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <DisneyNav/>
      <Routes>
       <Route index element={<Login/>} /> 
       <Route exact path='/home' element={<Home/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
