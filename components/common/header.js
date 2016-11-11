import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                {"|"}
                <Link to="/list">List</Link>
                {"|"}
                <Link to="/courses">Courses</Link>

            </div>
        );
    }
}

export default Header;