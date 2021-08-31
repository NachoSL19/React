import {useState} from "react"
import Item from "./Item"

const ItemList = () => { 
	const datos = [{
	    id: 1,
	    pictureUrl: 'd',
	    title: 'auriculares',
	    description: 'Auriculares Gamer',
	    price: 15000
	},{
	    id: 2,
	    pictureUrl: 'd',
	    title: 'notebook',
	    description: 'Notebook 8gb ram ssd 500gb',
	    price: 78000
	},
	{
	    id: 3,
	    pictureUrl: 'd',
	    title: 'mouse',
	    description: 'Mouse inalambrico',
	    price: 10000
	},
	{
	    id: 4,
	    pictureUrl: 'd',
	    title: 'teclado',
	    description: 'Teclado Mecanico Switches BLUE',
	    price: 11000
	},
	{
	    id: 5,
	    pictureUrl: 'd',
	    title: 'gabinete',
	    description: 'Gabinete PC Gamer',
	    price: 7000
	},
	{
	    id: 6,
	    pictureUrl: 'd',
	    title: 'monitor',
	    description: 'Monitor 144hz HD',
	    price: 37000
	}];

	const getDatos = () => {
	    return new Promise((resolve, reject) => {
		setTimeout(() => {
		    resolve(datos);
		},2000);
	    })
	}

getDatos().then((datos) => console.log(datos));

let [datos, setProductos] = useState (0)

datos.map(u => return <li>{u.productos}</li>)

    return (
        <Item />
			);

}

export default ItemList;
