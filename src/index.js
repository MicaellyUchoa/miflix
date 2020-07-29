import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/video";
import Home from "./pages/home";
import CadastroCategoria from "./pages/cadastro/categoria";
import Page404 from "./pages/pageError/Page404";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={Page404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
