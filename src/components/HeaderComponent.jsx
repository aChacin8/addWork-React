import { useState } from "react";

export default function HeaderComponent ({titulo = 'Titulo Provicional', addWork}) {
    
    let [textValue, setTextValue] = useState ('');

    return (
        <>
            <div>
                <h1>{titulo}</h1>
                <label>Tarea: </label> <input type="text" value={textValue} onChange={() => setTextValue (event.target.value)}/>
                <button onClick={() => addWork (textValue)}>Agregar Tarea</button>
            </div>
        </>
    );
}