import React from 'react'
import '../App.css';

const Navbar = ({name, filter}) => {
    return (
        <div className="header">
            <h1>Software Engineer Overview</h1>
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Search"
            />
        </div>
    )
}

export default Navbar