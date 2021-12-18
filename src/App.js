import React from 'react';
import './App.css';
import Form from "./Form/Form";
import {Route, Routes} from "react-router-dom";
import Register from "./Form/Register";
import {Layout} from './Form/Layout'
import List from "./Form/List";

export default function App() {

    return (

        <div className="App">

            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='SignIn' element={<Form/>}/>
                    <Route path='Register' element={<Register/>}/>
                    <Route path='UserList' element={<List/>}/>
                </Route>
            </Routes>
        </div>
    );

}



