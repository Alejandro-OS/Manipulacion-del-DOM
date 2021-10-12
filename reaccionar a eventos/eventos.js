const input = document.getElementById('firtName')

//input.addEventListener(tipo de evento, funcion)
//accion 'click', 'input'

const accion = () => {
    console.log("ha sucedido un click")
}
input.addEventListener('click', accion)

input.addEventListener('input', () => {
    cosole.log('hey')
})

input.addEventListener('input', (event) => {
    cosole.log(event.data)                  //es la informacion que se escribe en el input
})


const email = document.getElementById('email')

const accion = () => console.log('accion 1')

const accion2 = () => console.log('accion2')

//agrega acciones
email.addEventListener('click', accion)  
email.addEventListener('click', accion2)
email.addEventListener('click', () => { cosole.log('una accion con funcion anonima')}) // esta accion no se puede eliminar a menos que se borre el codigo

//elimina una accion
email.removeEventListener('click', accion)

//Básicamente la propagación de eventos se produce cuando tienes puestos algunos eventos en contenedores que son hijos de otro, por ejemplo:

/*<div id="div1">
    <div id="div2">
        <div id="div3">
            Hola
        </div>
    </div>
</div>*/

//Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2),
//y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs.

//La forma de deterlo es usando el método stopPropagation() que viene dentro del argumento event que cualquier evento nos provee, por tanto,
//yo puedo decirle al div3: “Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya se que usted está dentro de los demás, pero yo solo lo quiero a usted”,
//de tal forma que al event listener del programation le puedo poner:

div3.addEventListener("click", event => {

    event.stopPropagation()

});

//De esta forma, el evento de div2 y div1 no serán ejecutados

//Dato curioso, cuando tu defines un elemento con un ID en HTML, en JavaScript se crea automágicamente una variable con ese id que creaste,
//por eso es completamente posible que yo pueda usar la variable div3 sin tener que seleccionar el elemento 👀

const referencia = document.querySelector('div#div2');
const referencia2 = document.querySelector('div#div3')

const accion = (evento) => {
    console.log(`hola desde: ${evento.currentTarget.nodeName}`)
};

referencia.addEventListener('click', accion)                     //el eventose propaga del div2 al div1

referencia2.addEventListener('click', (evento)=> {                //el evento click no se propaga del div3 al div2
    evento.stopPropagation()                                     // SE RECOMIENDA NO USAR Y QUE EL DOM TRABAJE COMO DEBERIA
    console.log(`holas desde: ${evento.currentTarget.nodeName}`)
})