import React from "react";
import { FooterBase } from "./styles";
import logo from "../../assets/images/logo.png";
function Footer() {
    return (
        <FooterBase>
            <a href="https://github.com/MicaellyUchoa" target="_blank" rel="noopener noreferrer">
                <img src={logo} height="40" alt="Author" />

                <p>Orgulhosamente criado por Micaelly Uchoa</p>
            </a>
        </FooterBase>
    );
}

export default Footer;
