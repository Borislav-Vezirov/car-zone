import { AuthContext } from './contexts/AuthContext.js'
import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Catalog from "./components/Catalog.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { useState } from 'react';
import AddCar from './components/AddCar.js';
import Details from './components/Details.js';
import EditCar from './components/EditCar.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';


function App() {

  const [user, setUser] = useLocalStorage('user', {
    accessToken: "",
    username: "",
    _id: "",
  });

  const onLogin = (authData) => {
    console.log(authData);
    setUser(authData);
  }

  return (
      <AuthContext.Provider value={{user, onLogin}}>
      <div className="App">
        <Header />
        < main id="main-content">
          <Routes>
            <Route path="/" element={ < Home /> } />
            <Route path="/catalog" element={ < Catalog /> } />
            <Route path="/login" element={ < Login /> } />
            <Route path="/register" element={ < Register /> } />
            <Route path="/add-car" element={ < AddCar /> } />
            <Route path="/details/:carId" element={ < Details /> } />
            <Route path="/edit/:carId" element={ < EditCar /> } />
          </Routes>
        </main>
      </div>
      </AuthContext.Provider>
  );
}

export default App;
