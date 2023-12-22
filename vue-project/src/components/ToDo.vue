<template>
    <h1>What do you need to do?</h1>
    <input id="task" type="text" v-model="task">
    <button @click="addTask" >Add</button>

    <h2>To do:</h2>
    <ul>
        <li 
            v-for="(task, index) in arrayToDo" 
            :key="index"
            :style="marginX"> 
            {{ task }}
            <button @click="deletTask(index)">X</button>
        </li>
    </ul>
</template>
<script setup>
    import { ref } from 'vue';

    const marginX = 'margin: 10px 0 ;';

    // valor del input
    const task = ref('');

    // lista de tasks
    const arrayToDo = ref([]);


    const addTask = () => {
        // Si en el valor del input, sin espacios (trim), es difetente a '' empieza la logica
        if (task.value.trim() !== ''){
            // Empuja el valor del input dentro del array
            arrayToDo.value.push(task.value);
            // Limpia el valor del input
            task.value = ''; 
        };
    };

    // elimina la tarea del array del index especifico donde se encuentra
    const deletTask = (index) => {
        arrayToDo.value.splice(index,1 );
    };


</script>

