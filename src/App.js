import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisneyNav from './components/DisneyNav';

function App() {
  return (
    <div className="App">
      <Router>
        <DisneyNav/>
      <Routes>
       <Route index element={<Login/>}  /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
