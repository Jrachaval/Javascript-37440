let total = 0 ;


class Pack{
    constructor(nombre, precio, periodo){
        this.nombre = nombre;
        this.precio = precio;
        this.periodo = periodo;
    }
}

const pack1 = new Pack("Begginer", 25, " Mensual");
const pack2 = new Pack("Amateur", 40, " Mensual");
const pack3 = new Pack("Pro Praetorian", 50, " Mensual");

function Pregunta(){
    const Respuesta = prompt("Desea adquirir alguno de nuestros packs? \n1) Si \n2) No");
    if (Respuesta == "1"){
        return true;
    } else {
        return false;
    }

}

function ComprarPack() {
    while (Pregunta()) {
      const Seleccion = prompt("Seleccione su Pack de entrenamiento \n1) Begginer \n2) Amateur \n3) Pro Praetorian");
      
      switch (Seleccion) {
        case "1":    
          alert("Adquiriste " + pack1.nombre + " por " + pack1.precio + pack1.periodo);
          total = total + pack1.precio ;
          break;
        case "2":
            alert("Adquiriste " + pack2.nombre + " por " + pack2.precio + pack2.periodo);
            total = total + pack2.precio ;            
            break;
        case "3":
            alert("Adquiriste " + pack3.nombre + " por " + pack3.precio + pack3.periodo);
            total = total + pack3.precio ;
            break;
        default:
          alert("Estas realmente listo?");
          break;
      }
    }
    alert("El total de su compra es: "+ total);

  }
  
  ComprarPack();