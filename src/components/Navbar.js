import React from 'react'
import { BrowserRouter as Router, Routes, Switch, Route, Link,useHistory } from 'react-router-dom';

function Navbar() {
    const history = useHistory();

    const Logout =() =>{
        window.localStorage.setItem("isAuthenticated",false);
        history.push("/login")
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark justify-content-between">
                <a class="navbar-brand">Docs</a>
                <button 
                    class="btn btn-outline-danger my-2 my-sm-0" 
                    type="submit" 
                    onClick={() => Logout()}
                >Logout</button>
            </nav>
        </div>
    )
}

export default Navbar
