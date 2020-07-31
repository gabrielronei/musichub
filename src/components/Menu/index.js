import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import ButtonLink from '../components/MenuLink';
import LogoMusic from '../LogoMusic';

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
