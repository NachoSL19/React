const Item = () => {
return (
<header>
<div id="lista">
<h2 class="titulo">Disponible</h2>
<ul>
<a href="#"><li><img src="imagenes/auris.jpg" height="50px"></img>Auriculares</li></a>
<a href="#"><li><img src="imagenes/notebook.png" height="50px"></img>Notebook</li></a>
<a href="#"><li><img src="imagenes/mouse.png" height="50px"></img>Mouse</li></a>
<a href="#"><li><img src="imagenes/teclado.jpg" height="50px"></img>Teclado Mecanico</li></a> 
<a href="#"><li><img src="imagenes/gabinete.jpg" height="50px"></img>Gabinete</li></a> 
<a href="#"><li><img src="imagenes/monitor.jpg" height="50px"></img>Monitor</li></a> 
</ul>
</div>
</header>
)
}

const datos = [{
    id: 1,
    title: 'auriculares',
    price: 15000
},{ 
    id: 2,
    title: 'notebook',
    price: 78000
},
{ 
    id: 3,
    title: 'mouse',
    price: 10000
},
{ 
    id: 4,
    title: 'teclado',
    price: 11000
},
{ 
    id: 5,
    title: 'gabinete',
    price: 7000
},
{ 
    id: 6,
    title: 'monitor',
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

export default Item;