 
 const baseDeDatos = [
    {
        id: 1,
        nombre: 'Dumbell',
        precio: 11.99,
        imagen: 'assets/img/dumbell-barbell-bodybuilding-equipment.jpg'
    },
    {
        id: 2,
        nombre: 'Plates',
        precio: 29.99,
        imagen: 'assets/img/three-pairs-of-assorted-color-rogue-bumper-plates.jpg'
    },
    {
        id: 3,
        nombre: 'Rope',
        precio: 4.99,
        imagen: 'assets/img/crossfit-exercise-equipment-fitness-gym-wallpaper-preview.jpg'
    },
    {
        id: 4,
        nombre: 'Kettbells',
        precio: 19.99,
        imagen: 'assets/img/kettlebells-sport-workout-exercise-gym-fitness.jpg'
    },
    {
        id: 5,
        nombre: 'Bars',
        precio: 45.00,
        imagen: 'assets/img/various-fit-fitness-gym.jpg'
    },
    {
        id: 6,
        nombre: 'Bands',
        precio: 9.99,
        imagen: 'assets/img/bandas.jpg'
    },
    {
        id: 7,
        nombre: 'Back',
        precio: 5.99,
        imagen: 'assets/img/naranja.jpg'
    },
    {
        id: 8,
        nombre: 'Wheel  ',
        precio: 5.99,
        imagen: 'assets/img/ruedita.jpg'
    },
    {
        id: 9,
        nombre: 'Tobilleras',
        precio: 5.99,
        imagen: 'assets/img/tobilleras.webp'
    },
    {
        id: 10,
        nombre: 'Watch',
        precio: 18.99,
        imagen: 'assets/img/timer.jpg'
    },
    {
        id: 11,
        nombre: 'Creatina',
        precio: 19.99,
        imagen: 'assets/img/creatina.jpg'
    },
    {
        id: 12,
        nombre: 'Proteina y',
        precio: 19.99,
        imagen: 'assets/img/prote.webp'
    },
    {
        id: 13,
        nombre: 'Proteina x',
        precio: 19.99,
        imagen: 'assets/img/prote1.png'
    },
    {
        id: 14,
        nombre: 'Aminoacidos y',
        precio: 15.99,
        imagen: 'assets/img/amino1.jpeg'
    },
    {
        id: 15,
        nombre: 'Aminoacidos x',
        precio: 15.99,
        imagen: 'assets/img/amino2.jpeg'
    }
];



let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcart = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMaside = document.querySelector('#col-sm-4')

const botonVaciar = document.createElement('button');
botonVaciar.classList.add('btn', 'btn-danger', 'boton-vaciar');
botonVaciar.textContent = `Vaciar`;
botonVaciar.addEventListener('click', vaciarCarrito);


function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
  
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = `Get for ${divisa}${info.precio}`;
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', addProductToCart);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
               
    });
    
}

function addProductToCart(evento) {

    carrito.push(evento.target.getAttribute('marcador'))

    renderCart();
    crearBotonVaciarCarrito();

}

function renderCart() {
    DOMcart.textContent = '';

    const cartWD = [...new Set(carrito)];

    cartWD.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {

            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
   
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        
        miNodo.appendChild(miBoton);
        DOMcart.appendChild(miNodo);
    });
    
    DOMtotal.textContent = calcularTotal();
}


function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
 
    renderCart();
    crearBotonVaciarCarrito();
}


function calcularTotal() {
    
    return carrito.reduce((total, item) => {
        
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {

    carrito = [];

    renderCart();
    crearBotonVaciarCarrito();
}




renderizarProductos();
renderCart();
crearBotonVaciarCarrito();


function crearBotonVaciarCarrito(){
if(DOMcart.textContent != ''){
    DOMaside.appendChild(botonVaciar)
}else{
    DOMaside.removeChild(botonVaciar)
}
}