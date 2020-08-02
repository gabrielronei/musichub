import config from '../config';

const URL_VIDEOS = `${config.URL_TOP}/videos`;

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(video),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const categoriasServidor = await resposta.json();

        return categoriasServidor;
      }

      throw new Error('Não foi possivel fazer o fetch!');
    });
}

export default {
  create,
};
