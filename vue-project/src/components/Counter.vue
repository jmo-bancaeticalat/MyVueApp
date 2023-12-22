<script setup>
import { ref, computed } from 'vue';

// Variable reactiva
let counter = ref(0);

// Funcion para incrementar el valor de counter
const increment = () => {
  counter.value++;
};

// Funcion para disminuir el valor de counter
const decrement = () => {
  counter.value--;
};

const reset = () => (counter.value = 0);


const classCompute = computed(() =>{
  if (counter.value === 0){
    return 'zero'
  }
  if (counter.value > 0){
    return 'positive'
  }
  if (counter.value < 0){
    return 'negative'
  }
})

// Definimos array vacio para los favoritos
const arrayFav = ref([])

// Funcion para empujar el valor de counter al array vacio
const add = () => {
    arrayFav.value.push(counter.value);
}

// Funcion computada para desabilitar el boton 
const blockBtnFav = computed(() => {
  // Debtro del valor del array buscamos el numero y si es igual al valor del counter retorna true
  const numSearch = arrayFav.value.find(num => num === counter.value);
   console.log(numSearch);
  //  El 0 se interpreta como falso por lo que hay que hacerle un condicional especial
   if (numSearch === 0){
    return true
   }
  //  Operador ternearo, si es true bloquea el boton 
   return numSearch ? true : false ;
})

</script>

<template>
    <!-- Insertando una expresion de js, si counter es mayor que 0 inserta la clase 'positive' sino inserta 'negative' -->
    <!-- <h2 :class="counter > 0 ? 'positive' : 'negative' " >{{ counter }}</h2> -->
    <h2 :class="classCompute" >{{ counter }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <button @click="add" :disabled="blockBtnFav">Add to favorites</button>


    <h3>Favorites numbers</h3>
    <br>
    <ul>
      <!-- Imprimimos los número de array una lista no numerada -->
      <li v-for="(num, index) in arrayFav" :key="index">
        {{ num }}
      </li>
    </ul>
    
</template>

<style>
.positive {
  color: green;
}
.negative {
  color:red;
}
.zero {
  color: peru;
}


</style>