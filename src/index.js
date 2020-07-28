import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/video";
import Home from "./pages/home";
import CadastroCategoria from "./pages/cadastro/categoria";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={() => <div>PÁGINA 404</div>} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
