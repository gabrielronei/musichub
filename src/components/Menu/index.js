import React from 'react';
import LogoMusic from '../../components/LogoMusic';
import './Menu.css';
import ButtonLink from '../components/MenuLink';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <LogoMusic />
            </Link>

            <ButtonLink className="ButtonLink" to="/cadastro/video"> 
                Novo vídeo 
            </ButtonLink>
        </nav>
    );
}


export default Menu;