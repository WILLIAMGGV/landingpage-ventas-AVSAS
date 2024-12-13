import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Lista from "./lista";


//const socket = io("/");

function App() {
  return (
    <div className="App">

        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Lista />} />
            
          </Routes>
        </HashRouter>
    
    </div>
  );
}

export default App;
