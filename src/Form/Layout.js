import {Link, Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <Link to="/SignIn">SignIn</Link>
                <Link to="/Register">Register</Link>
            </header>


            <Outlet/>


        </>

    )
}

export {Layout};