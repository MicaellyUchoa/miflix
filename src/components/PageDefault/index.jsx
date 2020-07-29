import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";
import { Router, useHistory } from "react-router-dom";
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
`;

function PageDefault({ children }) {
    const router = new useHistory();
    console.log();

    return (
        <>
            <Menu />
            <Main
                style={
                    router.location.pathname !== "/" ? { paddingLeft: "5%", paddingRight: "5%", paddingTop: 50 } : {}
                }>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;
