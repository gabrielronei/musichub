import config from '../config';

const ALL_CATEGORIES_URL = `${config.URL_TOP}/categorias`;
const ALL_CATEGORIES_WITH_VIDEO = `${config.URL_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(ALL_CATEGORIES_WITH_VIDEO)
    .then(async (resposta) => {
      if (resposta.ok) {
        const categoriasServidor = await resposta.json();

        return categoriasServidor;
      }

      throw new Error('Não foi possivel fazer o fetch!');
    });
}

function getAll() {
  return fetch(ALL_CATEGORIES_URL)
    .then(async (resposta) => {
      const categoriasServidor = await resposta.json();

      return categoriasServidor;
    });
}

export default {
  getAllWithVideos,
  getAll,
};
