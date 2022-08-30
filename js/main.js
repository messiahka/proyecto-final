// DESAFIO ENTREGABLE 1


// declaro las funciones
function saludar() {
  alert(
    "Bienvenido " +
    nombre.toUpperCase() +
    " Gracias por elegirnos, a continuación te presentamos nuestro delicioso catálogo de Hamburguesas"
  );
}

function comprarProducto() {
  producto = prompt("Elija una de nuestras delicias: \n 1: Hamburguesa Simple \n 2: Hamburguesa Doble \n 3: Hamburguesa Completa");
  adicion = prompt("¿Desea agregar Papas Fritas a su Pedido? \n 1: Si \n 2: No")
  if (producto === "1" && adicion === "1") {
    alert("elegiste Hamburguesa Simple con Papas para la compra");
  } else if (producto === "1" && adicion === "2") {
    alert("elegiste hamburguesa Simple para tu compra");
  } else if (producto === "2" && adicion === "1") {
    alert("elegiste Hamburguesa Doble con Papas para tu compra");
  } else if (producto === "2" && adicion === "2") {
    alert("elegiste Hamburguesa Doble para tu compra");
  } else if (producto === "3" && adicion === "1") {
    alert("elegiste Hamburguesa Completa con Papas para tu compra");
  } else if (producto === "3" && adicion === "2") {
    alert("elegiste Hamburguesa Completa para tu compra");
  }
  opcion = prompt("Vuelve a ingresar una opción \n 2: Crear pedido \n 3: Terminar");
}

function finalizarCompra() {
  if (producto === "1" && adicion === "1") {
    alert("usted eligió Hamburguesa Simple con Papas por un monto final de " + (hamburguesaSimple + papasFritas) + " pesos");
  } else if (producto === "1" && adicion === "2") {
    alert("usted eligió Hamburguesa Simple por un monto final de " + hamburguesaSimple + " pesos");
  } else if (producto === "2" && adicion === "1") {
    alert("usted eligió Hamburguesa doble con Papas por un monto final de " + (hamburguesaDoble + papasFritas) + " pesos");
  } else if (producto === "2" && adicion === "2") {
    alert("usted eligió Hamburguesa doble por un monto final de " + hamburguesaDoble + " pesos");
  } else if (producto === "3" && adicion === "1") {
    alert("usted eligió Hamburguesa Completa con Papas por un monto final de " + (hamburguesaCompleta + papasFritas) + " pesos");
  } else if (producto === "3" && adicion === "2") {
    alert("usted eligió Hamburguesa Completa por un monto final de " + hamburguesaCompleta + " pesos");
  }

}

function encuesta() {
  alert("Ha continuacion le realizaremos una breve encuesta de satisfaccion");
  let option = prompt(`¿Como fue su experiencia en Hamburguesas Tuttita?
1: Mala
2: Regular
3: Buena
4: Muy Buena
5: Excelente
`);
  switch (option) {
    case "1":
      console.log("Malo");
      break;
    case "2":
      console.log("Regular");
      break;
    case "3":
      console.log("Bueno");
      break;
    case "4":
      console.log("Muy Bueno");
      break;
    case "5":
      console.log("Excelente");
      break;
    default:
      console.log("No has ingresado una opción válida");
      break;
  }
}

function despedir() {
  alert(
    "Muchas gracias por elegirnos " +
    nombre.toUpperCase() +
    ", que disfrutes y vuelve pronto!!!"
  );
}

// declaro las variables
let producto;
let adicion;
let papasFritas = Number(500);
let hamburguesaSimple = Number(800);
let hamburguesaDoble = Number(1000);
let hamburguesaCompleta = Number(1200);

let nombre = prompt("Bienvenido a Hamburguesas Tuttita, ingrese su nombre");

saludar()

let opcion = prompt("Ingrese una opción \n 1: Comprar Hamburguesa \n 2: Finalizar Compra \n 3: Terminar");

// ciclo while para que el cliente decida sobre si quiere comprar o finalizar
while (opcion !== "3") {
  if (opcion === "1") {
    comprarProducto();
  }
  if (opcion === "2") {
    finalizarCompra();
    opcion = "3";
  }
}
// una breve encuesta para saber la satisfacción del cliente
encuesta();
// saludo de despedida
despedir();





