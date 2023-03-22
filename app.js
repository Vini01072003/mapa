'use strict'


const mapa = document.querySelector('#map')
const sigla = document.querySelector('#sigla')

const getEstado = ( {target} ) =>{
    const estado = target.id.replace('BR-', '')
     sigla.innerHTML = estado
    console.log(estado);
    
 };


mapa.addEventListener('click', getEstado)