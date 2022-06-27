let total = 0 ;


class Pack{
    constructor(nombre, precio, periodo, id){
        this.nombre = nombre;
        this.precio = precio;
        this.periodo = periodo;
        this.id = id;
    }
}

const pack1 = new Pack("Begginer", 25, " Mensual", "1");
const pack2 = new Pack("Amateur", 40, " Mensual", "2");
const pack3 = new Pack("Pro Praetorian", 50, " Mensual", "3");

const packs = [pack1, pack2, pack3]

function Pregunta(){
    const Respuesta = prompt("Desea adquirir alguno de nuestros packs? \n1) Si \n2) No");
    if (Respuesta == "1"){
        return true;
    } else {
        return false;
    }
}

function ComprarPack(){
    while (Pregunta()){
        let id = MenuProductos();
        let pack = packs.find(x => x.id == id);
        total += pack.precio;
        alert("Se ha adquirido el pack " + pack.nombre + " por un total de " + pack.precio + "USD");
        agregarPack(id);
    }    
}



function MenuProductos (){
    let Menudeploy = "Seleccione su Pack de entrenamiento \n";
    packs.forEach(pack => {
      Menudeploy += pack.id +")" + pack.nombre + "-" + "USD" + pack.precio + "\n";
    })
    let Respuesta = prompt (Menudeploy);
    return Respuesta;
}

function agregarPack(id){
   const packencontrado = packs.find(x => x.id == id);
   if (packencontrado == undefined){
    alert ("Quizas todavia no estes listo...");
   } else {
    // const  adquirido = prompt("Compraste " + packencontrado.nombre + "por USD" + packencontrado.precio);
   }
}

ComprarPack();
    


