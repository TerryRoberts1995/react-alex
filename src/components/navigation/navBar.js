import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
        <div className ='navBar-container'>
            <div className = "nav-link">
                <div className ='btns'><NavLink exact to="/">All Books</NavLink></div>
            </div>
            <div className = "nav-link">
            <div className ='btns'><NavLink exact to="/books">Add Books</NavLink></div>
            </div>
        </div>
        )
    }
}