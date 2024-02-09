import React from 'react';

function Header() {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        zIndex: 1000,
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
