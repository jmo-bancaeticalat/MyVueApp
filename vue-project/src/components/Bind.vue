<script setup>
  const backgroundRed = 'Background: red';
  const backgroundBlue = 'Background: blue';
  const backgroundGreen = 'Background: green';


</script>

<template>

  <!-- v-bind o : se usa para insertar atributos en etiquetas -->
  <h2 :style="backgroundRed">Background red</h2>
  <h2 :style="backgroundBlue">Background Blue</h2>
  <h2 :style="backgroundGreen">Background Green</h2>


</template>