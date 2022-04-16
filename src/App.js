import Header from "./components/Header.js";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home.js";
import Catalog from "./components/Catalog.js";
import Register from "./components/Register.js";


function App() {
  return (
    <div className="App">
      <Header />
      < main id="main-content">
        <Routes>
          <Route path="/" element={ < Home /> } />
          <Route path="/catalog" element={ < Catalog /> } />
        </Routes>
      </main>
    </div>
            <Route path="/register" element={ < Register /> } />
  );
}

export default App;
