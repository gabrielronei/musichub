import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValores(chave, valor) {
    setValues({ ...values, [chave]: valor });
  }

  function handleChange(infosDoEvento) {
    setValores(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return { values, handleChange, clearForm };
}

export default useForm;
