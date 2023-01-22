import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <div>
            <header class="header">
                <a href="#" class="logo ">slaywork.</a>
                <nav class="navbar">
                    <a href="#home">Talent</a>
                    <a href="#about">Employers</a>
                    <a href="#contact" class="try">Contact</a>
                </nav>
            </header>
        </div>
    )
}

export default Header