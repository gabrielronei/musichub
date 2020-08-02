import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDados(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div style={{ background: '#141414' }}>
        <Menu />
        {dados.length === 0 && (<div>Loading...</div>)}

        {dados.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dados[0].videos[0].titulo}
                  url={dados[0].videos[0].url}
                  videoDescription="MUSICHUB - Seu portal de musicas ao redor do mundo."
                />
                <Carousel
                  ignoreFirstVideo
                  category={dados[0]}
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

        {/* <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dados.categorias[0]}
      />
      <Carousel
        category={dados.categorias[1]}
      />
      <Carousel
        category={dados.categorias[2]}
      />
      <Carousel
        category={dados.categorias[3]}
      />
      <Carousel
        category={dados.categorias[4]}
      /> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
