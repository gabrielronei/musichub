import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import CategoriaPreviewCard from '../../../components/components/CategoriaPreview';
import FormField from '../../../components/components/FormField';

function CadastroCategoria() {

    const categoriaModel = {
        nome : '',
        descricao: '',
        cor: '#000000'
    }

    const [ categorias, setCategorias ] = useState([]);
    const [ categoria, setCategoria ] = useState(categoriaModel);

    function setValores(chave, valor) {

        setCategoria({...categoria, [chave]: valor,});
    }
    

    return(
        <PageDefault>
            <h1>Cadastro de Categoria:</h1>

            <form onSubmit={event => {
                event.preventDefault();
                setCategorias([...categorias, categoria]);
                setCategoria(categoriaModel);
            }} >

            <FormField label="Nome da categoria" name="nome" type="text" 
            value={categoria.nome} onChange={alterando => { setValores('nome', alterando.target.value)}}></FormField>
            
            <FormField label="Descrição" name="descricao" type="text" 
            value={categoria['descricao']} onChange={alterando => { setCategoria({...categoria, descricao: alterando.target.value,})}}></FormField>
            
            <FormField label="Cor" name="cor" type="color" 
            value={categoria.cor} onChange={alterando => { setCategoria({...categoria, cor: alterando.target.value,})}}></FormField>

            <div>
                <p>Preview</p>
                <CategoriaPreviewCard cor={categoria.cor}> {categoria.nome} </CategoriaPreviewCard>
            </div>

                <button> Cadastrar </button>
            </form>


            <ul>
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria} ${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}
            </ul>


            <Link to="/">
            Ir para home
            </Link>
            
        </PageDefault>
    )
}

export default CadastroCategoria;