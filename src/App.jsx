import { useState } from "react"; //se tiene que importar siempre useState


import './App.css'
import WorkListComponent from './components/WorkListComponent'

function App() {

  let [contador, setContador] = useState (0); //useState() permite crear una variable de estado. 
  //useState () regresa un arreglo, el primer elemento de este es la variable de estado. 
  // La variable de estado se modifica con una función "set", en este caso lleva por nombre "setContador"

  //Variable de estado permite actualizar el componente.

  const modificarContador = (e) => {setContador (contador += 1) }

  return (
    <>
      <WorkListComponent titulo = "Trabajo" />
      <WorkListComponent titulo = "Hogar" />
      <WorkListComponent titulo = "Escuela" />

      <h1>Contador: {contador}</h1>
            <button onClick={modificarContador}>Sumar contador</button>
    </>
    
  )
}

export default App
