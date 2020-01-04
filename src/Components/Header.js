import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header>
                <ul>

                    <li>
                        <Link to="/">Movies</Link>
                    </li>

                    <li>
                        <Link to="/tv">TV</Link>
                    </li>

                    <li>
                        <Link to="/search">Search</Link>
                    </li>

                </ul>
            </header>
        )
    }
}
