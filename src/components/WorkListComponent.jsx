
import UnorderedListComponent from "./UnorderedListComponent";
import HeaderComponent from "./HeaderComponent";
import { useState } from "react";


export default function WorkListComponent ({titulo = 'Lista de Tareas'}, textValue) {    

    let [work, setWork] = useState ([]);
    // let [contador, setContador] = useState (0);

    const btnComplete = (indexWorkDelete) => {
        alert (`¡Tarea Completada!`);

        let filterWork = work.filter ((work, index)=> {
            return indexWorkDelete != index
        });
        setWork (filterWork);
    }

    const addWork = (newWork) =>{
        // ... spread operator.
        // "..." copia lo que se encuentra en el arreglo seleccionado, en el nuevo arreglo
        
        let workNew = [...work]; //copia del arreglo original
        workNew.push (newWork)
        setWork (workNew)
    }

    return (
        <>
            <HeaderComponent titulo = {titulo} addWork={addWork}/>
            <UnorderedListComponent workUl = {work} btnCompleteAction = {btnComplete} />
        </>
    );
}