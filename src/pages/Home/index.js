import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categorias?embed=videos
  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*   <BannerMain
        videoTitle={daddosIniciais.categorias[0].videos[0].titulo}
        url={daddosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end"
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
      />  */}

    </PageDefault>
  );
}

export default Home;
