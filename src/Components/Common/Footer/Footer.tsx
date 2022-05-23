import React from 'react'
import { Link } from 'react-router-dom';

import logo from 'Assets/Images/64-wh-logo@3x.png'

import "./Footer.scss"
interface MenuProp {
    to?: string;
    activeMenu: string;
    menuName: string;
}
interface HeaderProps {
    menus: MenuProp[];
}

function Footer() {
    return (

        <div className='footer-container'>
            <div className='left'>
                <img className="logo" src={logo} alt="" />
            </div>
            <ul className='right'>
                <li className="sns">
                    <span>IG</span>
                    <span>TW</span>
                    <span>YT</span>
                    <span>FB</span>
                </li>
                <li className="contact">
                    <span>1F, 17-10, DOSAN-DAERO 8-GIL, GANGNAM-GU</span><br />
                    <span>TEL. 02.543.4983     FAX. 02.6280.4079</span><br />
                    <span>COPYRIGHT©LOOCREATIVE ALL RIGHTS RESERVED.</span>
                </li>
            </ul>
        </div>


    )
}

export default Footer;