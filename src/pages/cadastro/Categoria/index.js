import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    //chave: nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infoDoEvento) {
    const { getAttribute, value } = infoDoEvento.target;
    setValue(
      getAttribute('name'),
      value);
  }
  return (
    <PageDefault>
      <h1>Cadastre de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          value={values.nome}
          type= "text"
          name= "nome"
          onChange={handleChange}
        />

        <FormField
          label = "Descrição"
          value={values.descricao}
          type= "text"
          name= "descricao"
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label= "Cor"
          value={values.cor}
          type= "color"
          name= "cor"
          onChange={handleChange}
        />

        <button>
          Cadastrar
          </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria} ${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para a home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;