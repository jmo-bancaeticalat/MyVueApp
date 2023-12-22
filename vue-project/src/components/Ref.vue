<script setup>
import { ref } from 'vue';

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
    <h2>{{ counter }}</h2>
    <button @click="incrementar">Incrementar</button>
    <button @click="restar">Restar</button>
</template>