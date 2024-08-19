import useInput from "./useInput";

const Formulario = () => {
  const nombre = useInput('');
  const apellido = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(('Nombre: ', nombre.value));
    console.log(('Apellido: ', apellido.value));
  }


  return<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre" {...nombre} />
    <input type="text" placeholder="Apellido" {...apellido} />
    <button type="submit">Enviar</button>
  </form>
}

export default Formulario