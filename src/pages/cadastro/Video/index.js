import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/components/FormField';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaRepository.getAll()
      .then((categoriasRepository) => setCategorias([...categoriasRepository]));
  }, []);

  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias
          .find((categoria) => categoria.nome === values.categoria);

        videoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrado com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do video"
          name="titulo"
          value={values.titulo}
          onChange={(valor) => handleChange(valor)}
        />

        <FormField
          label="URL do video"
          name="url"
          value={values.url}
          onChange={(valor) => handleChange(valor)}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          autoComplete="Off"
          suggestions={categorias.map((categoria) => categoria.nome)}
          onChange={(valor) => handleChange(valor)}
        />

        <button type="submit"> Cadastrar </button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
