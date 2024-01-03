<template>
    <div>
        <p>Counter : {{ count }}</p>
        <p>Doble : {{ dobleCount }}</p>
        <p>Name : {{ name }} -- {{ nameUpperCase }}</p>
        <hr>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reverseName">Reverse Name</button>
    </div>
  </template>
  
  <script setup>
    import { useCounter } from './Pinea'
    import { storeToRefs } from 'pinia';


    const store = useCounter();
    const {name, count, dobleCount, nameUpperCase} = storeToRefs(store)

    // Call the action function 
    const {increment, decrement, reverseName} = store;
 


 
  </script>
  