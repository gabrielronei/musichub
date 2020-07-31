import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import CategoriaPreviewCard from '../../../components/components/CategoriaPreview';
import FormField from '../../../components/components/FormField';

function CadastroCategoria() {
  const categoriaModel = {
    id: '',
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(categoriaModel);

  function setValores(chave, valor) {
    setCategoria({ ...categoria, [chave]: valor });
  }

  useEffect(() => {
    const URL = 'https://musichub-imersao.herokuapp.com/categorias';
    fetch(URL).then(async (resposta) => {
      const categoriasServidor = await resposta.json();
      setCategorias([
        ...categoriasServidor,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([...categorias, categoria]);
        setCategoria(categoriaModel);
      }}
      >

        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={(alterando) => { setValores('nome', alterando.target.value); }}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={categoria.descricao}
          onChange={(alterando) => {
            setCategoria({ ...categoria, descricao: alterando.target.value });
          }}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={categoria.cor}
          onChange={(alterando) => { setCategoria({ ...categoria, cor: alterando.target.value }); }}
        />

        <div>
          <p>Preview</p>
          <CategoriaPreviewCard cor={categoria.cor}>
            {categoria.nome}
          </CategoriaPreviewCard>
        </div>

        <button type="submit"> Cadastrar </button>
      </form>

      { categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((c) => (
          <li key={c.id}>
            {c.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;