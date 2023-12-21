
<script setup>
import { ref } from 'vue';

  const text = 'dinámico!';
  const StyleBackground = 'Background: red';
  const activo = true;

  const arrayFrutas = ["Manzana","Platano","Sandia","Frutilla","Cerezas"];

  const arrayTiendaFrutas = [
    {
    name:'Manzana',
    price: '$1.00',
    description: 'Una manzana',
    id: '1'
    },
    {
    name:'Platano',
    price: '$2.00',
    description: 'Una platano',
    id: '2'
    },
    {
    name:'Sandia',
    price: '$3.00',
    description: 'Una sandia',
    id: '3'
    },

  ];

const objetoFruta = {
    name:'Manzana',
    price: '$1.00',
    description: 'Una manzana',
    id: '1'
  };

// Variable reactiva
let counter = ref(0);

const incrementar = () => {
  counter.value++;
}
const restar = () => {
  counter.value--;
}


</script>
<template>
  <!-- Las llaves dobles se usan para pasar variables -->
  <!-- Las llaves dobles permiten expresiones de js .toUperCase en este ejemplo -->
  <h1>Hola Vue {{ text.toUpperCase() }}</h1>
  <!-- v-bind o : se usa para insertar atributos en etiquetas -->
  <h2 :style="StyleBackground">Background red</h2>
  <h2> 
    {{ activo ? 'Estoy activo' : 'Estoy inactivo' }}
  </h2>
  <h2 v-if="activo === true">Si la variable 'activo' es true, este texto se muestra</h2>
  <h2 v-else-if="activo === false">Si la variable 'activo' es false llega hasta acá</h2>
  <h2 v-else>Si la variable es nula o otra opcion, llega hasta aca</h2>

  <hr>

  <!-- En v-for creamos una variable y le indicamos que recorra el arrayFrutas de strings -->
  <h3>Array listado</h3>
  <ul>
    <li v-for="variableFruta in arrayFrutas">
      {{ variableFruta }}
    </li>
  </ul>

  <!-- En el v-for usado en un objeto se usa el atributo 'key' para el elemento unico que no se debe de repetir  -->
  <!-- Ademas mostramos los elementos de los objetos  -->
  <h3>Array de objetos listado por key</h3>
  <ul>
    <li v-for="tiendaFrutas in arrayTiendaFrutas" :key="tiendaFrutas.id">
      {{ tiendaFrutas.name }} - {{ tiendaFrutas.price }} - {{ tiendaFrutas.description }}
    </li>
  </ul>

  <!-- En v-for en OBJETOS  -->
  <h3>Objetos listado</h3>
  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="value">
      {{ index }} - {{ propiedad }} : {{ value }}
    </li>
  </ul>


  <hr>
  <h2>{{ counter }}</h2>
  <button @click="incrementar">Incrementar</button>
  <button @click="restar">Restar</button>
</template>
  
<style>
  h1 {
    color: aqua;
  }
</style>