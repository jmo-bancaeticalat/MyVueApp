<template>
    <div class="calculator">
      <h1>Calculator</h1>
      <input v-model="inputCalculo" type="text" class="inputCalculo">
      <div class="keypad">
        <button
          v-for="tecla in arrayTeclas"
          :key="tecla"
          class="key"
          @click="keyPress(tecla)"
        >
          {{ tecla }}
        </button>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const arrayTeclas = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "C", "0", "=", "/"
    ];


    const inputCalculo = ref(''); 

    const keyPress = (tecla) => {
        if (tecla === "="){
            calcular()
        }
        else if (tecla === "C") {
            inputCalculo.value = "";
        }
        else {
            inputCalculo.value += tecla;
        }
    };



    const calcular = () => {
        try {
            // Intenta evaluar la expresión matemática ingresada en inputCalculo
            inputCalculo.value = eval(inputCalculo.value);
        } catch (error) {
            // Si ocurre un error durante la evaluación, se establece el valor del input a 'Error'
            inputCalculo.value = 'Error';
        }
    };

</script>

<style>
    .inputCalculo {
        margin: 20px auto;
        width: 250px;
    }

    .calculator {
        margin: 0 auto ;
        width: 300px;
        margin: 50px auto;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
    }

    .keypad {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    .key {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        font-size: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f5f5f5;
        cursor: pointer;
    }
</style>
