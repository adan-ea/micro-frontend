import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
    };

    const navStyle = {
        listStyle: 'none',
        display: 'flex',
    };

    const liStyle = {
        marginRight: '20px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <header style={headerStyle}>
            <h1>My Website</h1>
            <nav>
                <ul style={navStyle}>
                    <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
                    <li style={liStyle}><a href="/about" style={linkStyle}>About</a></li>
                    <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;