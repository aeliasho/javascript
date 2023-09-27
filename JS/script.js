function saludarUsuario(nombre) {
    alert("Hola, " + nombre);
}

let nombreUsuario = prompt("Hola, ¿con quién tenemos el gusto?");
saludarUsuario(nombreUsuario);

if (nombreUsuario) {
    let opcionAtencion;
    let ayuda;

    while (true) {
        opcionAtencion = prompt("¿En qué te podemos ayudar? Elige un número:\n1. Compras\n2. Contacto\n3. Reclamos\n4. Devoluciones");

        switch (opcionAtencion) {
            case "1":
                ayuda = "Escogiste comprar un producto de nuestra tienda.";
                break;
            case "2":
                ayuda = "Escogiste ponerte en contacto con nosotros.";
                break;
            case "3":
                ayuda = "Escogiste realizar un reclamo.";
                break;
            case "4":
                ayuda = "Escogiste solicitar una devolución.";
                break;
            default:
                if (opcionAtencion === "") {
                    alert("Por favor, escoja un número de las opciones.");
                } else {
                    alert("Opción no válida. Por favor, escoja un número de las opciones.");
                }
                continue; 
        }

        break;
    }

    alert(ayuda);
    alert("Gracias por seleccionar su opción. En breve nos comunicaremos con usted.");
}

