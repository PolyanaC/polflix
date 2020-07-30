import React from 'react';
import Menu from '../../components/Menu';
import daddosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={daddosIniciais.categorias[0].videos[0].titulo}
        url={daddosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />

      <Carousel
        ignoreFirstVideo
        category={daddosIniciais.categorias[0]}
      />

      <Carousel
        category={daddosIniciais.categorias[1]}
      />

      <Carousel
        category={daddosIniciais.categorias[2]}
      />

      <Carousel
        category={daddosIniciais.categorias[3]}
      />

<Carousel
        category={daddosIniciais.categorias[4]}
      />

      <Carousel
        category={daddosIniciais.categorias[5]}
      />

      <Footer/>
    </div>
  );
}

export default Home;
