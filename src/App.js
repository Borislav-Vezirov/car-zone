import Header from "./components/Header.js";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home.js";


function App() {
  return (
    <div className="App">
      <Header />
      < main id="main-content">
        <Routes>
          <Route path="/" element={ < Home /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
