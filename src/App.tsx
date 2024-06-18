import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {Login} from "./view/page/Login/Login";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}/>
                <Route path="/login" Component={Login}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
