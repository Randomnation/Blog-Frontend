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
                <div className="container">
                    <header className="blog-header py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">              
                            <div className="col-4 pt-1">
                                <img src={logo} className="Main-logo" alt="logo" />
                            </div>
                            <div className="col-4 text-center">
                                <NavLink className="blog-header-logo text-dark" exact to="/">REST Blog</NavLink>
                            </div>
                        </div>
                    </header>
                    <div class="nav-scroller py-1 mb-2">
                        <nav class="nav d-flex justify-content-center">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </nav>
                    </div>
                    <div className="container">
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