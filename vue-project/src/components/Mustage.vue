<script setup>
  const text = 'dinámico!';
  const text2 = 'Este es otro texto dinámico';

</script>

<template>
  <!-- Las llaves dobles se usan para pasar variables -->
  <!-- Las llaves dobles permiten expresiones de js .toUperCase en este ejemplo -->
  <h1>Hola Vue {{ text.toUpperCase() }}</h1>    
  <p>{{ text2 }}</p>


</template>