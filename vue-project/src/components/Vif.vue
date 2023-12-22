<script setup>
  const activo = true;
  const inactivo = false;
</script>

<template>
  <h2> 
    {{ activo ? 'Estoy activo' : 'Estoy inactivo' }}
  </h2>
  <h2>
    {{ inactivo ? 'Estoy activo' : 'Estoy inactivo' }}
  </h2>

  <h2 v-if="activo === true">Si la variable 'activo' es true, este texto se muestra</h2>

  <h2 v-else-if="activo === false">Si la variable 'activo' es false llega hasta acá</h2>
  <!-- En este caso la variable deberia ser null para que llegue al v-else -->
  <h2 v-else>Si la variable es nula o otra opcion, llega hasta aca</h2>

</template>