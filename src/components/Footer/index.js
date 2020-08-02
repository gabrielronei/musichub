import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Musichub" />
      </a>
      <p>
        Musichub - Seu portal de musicas ao redor do mundo!
        {' '}
      </p>
    </FooterBase>
  );
}

export default Footer;
