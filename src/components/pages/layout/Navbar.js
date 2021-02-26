import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {


    
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a class="navbar-brand" href="#">React User</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="#">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>

                </div>
                    <Link className="btn btn-outline-light" to="/users/AddUser">Add User</Link>
            </div>
        </nav>
    );
};

export default Navbar;