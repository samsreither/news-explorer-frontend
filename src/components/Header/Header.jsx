import React from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css';

function Header( { handleOpenModal }) {
    return (
       <header className="header">
        <Navbar handleOpenModal={handleOpenModal}/>
       </header>
    );
}

export default Header;