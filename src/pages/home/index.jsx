import React from "react";
import "./styles.css";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
function Home() {
    return (
        <PageDefault style={{ background: "#141414" }}>
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
            />
            {dadosIniciais.categorias.map((_, index) => (
                <Carousel ignoreFirstVideo={index === 0} category={dadosIniciais.categorias[index]} />
            ))}
        </PageDefault>
    );
}

export default Home;
