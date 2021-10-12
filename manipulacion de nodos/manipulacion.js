document.getElementById('firstName')
    //output
    //<input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
    //solo trae un resultado por id unico

document.getElementsByTagName('input')
    //output
    /*HTMLCollection(17) [input.form-control, 
    input#firstName.form-control, 
    input#lastName.form-control, 
    input#username.form-control, 
    input#email.form-control, 
    input#address.form-control, 
    input#address2.form-control, 
    input#zip.form-control, 
    input#same-address.form-check-input, 
    input#save-info.form-check-input, 
    input#credit.form-check-input, 
    input#debit.form-check-input, 
    input#paypal.form-check-input, 
    input#cc-name.form-control, 
    input#cc-number.form-control, 
    input#cc-expiration.form-control, 
    input#cc-cvv.form-control, firstName: 
    input#firstName.form-control, lastName: 
    input#lastName.form-control, username: 
    input#username.form-control, email: 
    input#email.form-control, address: 
    input#address.form-control, …]
    */
   //el tagName no es un atributo unico por lo que salen varios resultados

document.getElementsByClassName('form-control')
        //output
        /*HTMLCollection(12) [input.form-control, 
            input#firstName.form-control, 
            input#lastName.form-control, 
            input#username.form-control, 
            input#email.form-control, 
            input#address.form-control, 
            input#address2.form-control, 
            input#zip.form-control, 
            input#cc-name.form-control, 
            input#cc-number.form-control, 
            input#cc-expiration.form-control, 
            input#cc-cvv.form-control, 
            firstName: input#firstName.form-control, 
            lastName: input#lastName.form-control, 
            username: input#username.form-control, 
            email: input#email.form-control, 
            address: input#address.form-control, …]*/
        //la ClassName tampoco es un atributo unico

//en la evolicion de las API's se empezaron a usar selectores mas convenientes como 
parentElement.querySelector() //devuelve el primer elemento que encuentra
parentElement.querySelectorAll() //devuelve una lista de elementos
/*estos selectores permiten modificar cualquier elemento del DOM
para estos selectores se utilizan los marcadores de CSS
# para ID's
. para clases
*/

parentElement.querySelectorAll() // genera un tipo de dato llamdo NodeList la cual no tiene todos los metodos de un array como: map, reduce, filter..

/* CREACION DE NODOS */

const container = document.querySelector('div.py-5.text-center') //selecciona una seccion div del DOM

const h3 = document.createElement('h3') //crea un elemento de tipo "h3"

container.appendChild(h3) // agreda el elemento "h3" al div  *agrega al final

const texto = document.createTextNode('hola gente') // creo un nodo solamente de texto

h3.appendChild(texto) // agrega el nodo texto al nodo h3

container.append('hola 2', document.createElement('div'))   //agrega varios elementos, no soportado por internet explorer

//document.insertBefore(nodeQueSeInserta, referencia)

const titulo = document.createElement('h1')

const referencia = document.querySelector('h2')

container.insertBefore(titulo, referencia) //inserta el titulo "h1" antes de la referencia "h2"

//referencia.insertAdjacentElement('', NUEVO_NODO) //la referencia es el nodo sobre el cual se trabaja, mientras que '' va la posicion en la que se agregara el nuevo nodo con respecto a la referencia
// pueden ser: 'beforebegin', 'afterbegin', 'beforeend' y 'afterend'

/*
[   ]---------beforebegin
[div]
  |
  |     [  ]---------afterbegin
  |-----[h1]
  |-----[p]
        [  ]---------beforeend
[   ]---------afterend
*/

/* OTRAS FORMAS DE AGREGAR HTML */

const nodo = document.querySelector('h2')
nodo.outerHTML // lee todo el nodo, no solo lo que contiene
nodo.innerHTML = "algo nuevo" // permite reescribir el contenido de nodo

//ejem
const nuevoHTML = nodo.outerHTML.replace('cadena de texto a reemplazar', 'cadena de texto con la que se reemplaza')

noso.innerHTML = nuevoHTML

/* ELIMINAR NODOS */

const nodoAElimminar = documen.getElementBy...
const padre = nodoAElimminar.parentElement // parentElement toma directamente el nodo padre
padre.removeChils(nodoAElimminar) //se elimina el nodo

const nodoEliminar = document.querySelector('h2')
nodoEliminar.remove() //se elimina na referencia (nodoEliminar)

const padre = document.querySelector('div.py-5.text-center')
const toreplace = documen.querySelector('h2')
const nodo = documen.createElement('h1')
nodo.textContent = "form checkout" //devuelve el texto contenido dentro del nodo, o reemplaza todo lo que haya dentro del nodo (incluyendo otros nodos) por texto
padre.replaceChild(nodo, toreplace) //replaceChild(nodoDeReemplazo, nodoQueSeReemplaza)


/* OPERACIONES EN LOTE */

for ( let i = 0; i<100; i++) {                          //forma ineficiente
    const node = documen.createElement('input')
    documen.body.appendChild(node)
}


const nodos = []
for ( let i = 0; i<100; i++) {                          
    const node = documen.createElement('input')
    nodos.push(node)
}

documen.body.append(...nodos)     // es una sola operacion de insercion