import {useState} from "react"

const ItemCount = ({stock,onAdd,initial}) => {

    let [contador, setContador] = useState(initial)
    
    const sumar = ( ) => {
        if(contador < stock){
             setContador(contador + 1)
        }
    }

    const restar = ( ) => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const agregar = () => {
        if(stock > 0){
            onAdd(contador)
        }

    }
if(stock > 0){
    return (
        <div>
            <p>Aca va el contador: {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
  }
}

export default ItemCount;