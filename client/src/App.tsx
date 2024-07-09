import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {Login} from "./view/page/Login/Login";
import {Signup} from "./view/page/Signup/Signup";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}/>
                <Route path="/login" Component={Login}/>
                <Route path="/signup" Component={Signup}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
