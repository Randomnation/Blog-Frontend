import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import logo from './logo.svg';
import Home from "./Home";
import Blog from "./Blog";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header className="Main">
                        <img src={logo} className="Main-logo" alt="logo" />
                        <h1 className="Main-title">REST Blog</h1>
                    </header>
                    <div className="container">
                        <ul className="nav nav-tabs custom">
                            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path ="/" component={Home} />
                            <Route path ="/blog" component={Blog} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default Main;