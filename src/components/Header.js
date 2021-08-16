import React from 'react';
import logo from '../../src/images/logo_header.svg';

function Header() {
    return (
        <header className="header">
                <img src={logo} alt="логотип Место" class="header__logo" />
        </header>
    )
        
}

export default Header;