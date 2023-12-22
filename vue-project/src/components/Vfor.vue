<script setup>
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

</script>

<template>

    <!-- En v-for creamos una variable y le indicamos que recorra el arrayFrutas de strings -->
    <h3>Array listado</h3>
    <ul>
        <li v-for="variableFruta in arrayFrutas">
        {{ variableFruta }}
        </li>
    </ul>

    <!-- En el v-for usado en un objeto se usa el atributo 'key' para el elemento unico que no se debe de repetir  -->
    <!-- Ademas mostramos los elementos de los objetos  -->
    <h3>Array de objetos listado</h3>
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

</template>