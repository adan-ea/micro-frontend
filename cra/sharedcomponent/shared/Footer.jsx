import React from 'react';

function Footer() {
    const footerStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        marginRight: '15px',
    };

    return (
        <footer style={footerStyle}>
            <p>© 2024 My Website. All rights reserved.</p>
            <div>
                <a href="/privacy" style={linkStyle}>Privacy Policy</a>
                <a href="/terms" style={linkStyle}>Terms of Use</a>
            </div>
        </footer>
    );
}

export default Footer;
