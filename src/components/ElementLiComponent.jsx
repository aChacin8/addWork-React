export default function ElementLiComponent (
    {
        textWork,
        btnPush = () => {console.log("Boton Presionado");},
        indexValue
        
    }
) {

    return <li>{textWork} <button onClick= { ()=> btnPush (indexValue)}>Completar</button></li>;

}