import React from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
function Page404() {
    return (
        <PageDefault>
            <h1 className="text-center">Página não encontrada</h1>
            <Link to="/">
                <p className="text-center underline">Volte para a home</p>
            </Link>
        </PageDefault>
    );
}

export default Page404;
