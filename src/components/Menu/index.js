import React from 'react';
import LogoMusic from '../../components/LogoMusic';
import './Menu.css';
import ButtonLink from '../components/MenuLink';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <LogoMusic />
            </a>

            <ButtonLink className="ButtonLink" href="/"> Novo vídeo </ButtonLink>
        </nav>
    );
}


export default Menu;