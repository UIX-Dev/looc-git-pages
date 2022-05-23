import React from 'react'
import { Link } from 'react-router-dom';

import logo from 'Assets/Images/64-wh-logo@3x.png'

import "./Header.scss"

interface MenuProp {
    to?: string;
    activeMenu: string;
    menuName: string;
}
interface HeaderProps {
    menus: MenuProp[];
}

const Header: React.FC = (props) => {
    return (

        <div className='header-container'>
            <div className='logo'>
                <Link to="/">
                    <img className='logo-img' src={logo} alt="" ></img>
                </Link>
            </div>
            <div className='menus'>
                <Link to="/">
                    <span>HOME</span>
                </Link>
                <Link to="/about">
                    <span>ABOUT</span>
                </Link>
                <Link to="/about">
                    <span>WORK</span>
                </Link>
                <Link to="/about">
                    <span>CONTACT</span>
                </Link>
            </div>

            <div className='language'>
                <div >
                    <span>ENG</span>
                </div>
            </div>
        </div>

    )
}

export default Header;