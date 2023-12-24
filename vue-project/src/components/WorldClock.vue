<template>
  <div>
    <h1>World Clock</h1>
    <div v-for="(timezone, index) in timezones" :key="index" class="timezone-item">
      <div class="timezone-name"><b>{{ timezone.name }}:</b></div>
      <div class="timezone-time">{{ timezone.currentTime }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const timezones = [
  { name: 'Buenos Aires', offset: -3, currentTime: ref(new Date()) },
  { name: 'Chicago', offset: -6, currentTime: ref(new Date()) },
  { name: 'Ciudad de México', offset: -6, currentTime: ref(new Date()) },
  { name: 'Dubái', offset: 4, currentTime: ref(new Date()) },
  { name: 'Hong Kong', offset: 8, currentTime: ref(new Date()) },
  { name: 'Los Ángeles', offset: -8, currentTime: ref(new Date()) },
  { name: 'Madrid', offset: 1, currentTime: ref(new Date()) },
  { name: 'Miami', offset: -5, currentTime: ref(new Date()) },
  { name: 'Moscú', offset: 3, currentTime: ref(new Date()) },
  { name: 'París', offset: 1, currentTime: ref(new Date()) },
  { name: 'Río de Janeiro', offset: -3, currentTime: ref(new Date()) },
  { name: 'Roma', offset: 1, currentTime: ref(new Date()) },
  { name: 'Santiago', offset: -3, currentTime: ref(new Date()) },
  { name: 'Seúl', offset: 9, currentTime: ref(new Date()) },
  { name: 'Singapur', offset: 8, currentTime: ref(new Date()) },
  { name: 'Sídney', offset: 11, currentTime: ref(new Date()) },
  { name: 'Toronto', offset: -5, currentTime: ref(new Date()) },

];


// Función para obtener la hora actual en base al desplazamiento horario
const getCurrentTime = (offset) => {
  const currentTime = new Date();
  const utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
  const newTime = new Date(utc + (3600000 * offset));
  return newTime.toLocaleTimeString();
};

// Actualizar la hora para cada zona horaria
const updateTimeForTimezones = () => {
  timezones.forEach((timezone) => {
    timezone.currentTime.value = getCurrentTime(timezone.offset);
  });
};

// Iniciar temporizador para actualizar la hora cada segundo
let intervalId;
onMounted(() => {
  updateTimeForTimezones(); // Actualizar la hora inicial al montar el componente
  intervalId = setInterval(updateTimeForTimezones, 1000); // Actualizar cada segundo
});

// Detener el temporizador al desmontar el componente
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style>
  .timezone-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
    gap: 10px; /* Espacio entre elementos */
  }

  .timezone-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    padding: 5px;
    border: 1px solid #ccc;
  }

  .timezone-name {
    font-weight: bold;
    margin-right: 10px;
  }
</style>