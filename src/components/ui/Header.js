import React from 'react'
import nasa from '../../img/nasa.png'

const Header = () => {
    return (
        <header className="header">
            <img src={nasa} alt="logo"></img>
            <p>
            <h1>NASA GALLERY</h1>
            </p>
        </header>
    )
}

export default Header
