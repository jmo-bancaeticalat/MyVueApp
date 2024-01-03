import { defineStore } from 'pinia';

export const useCounter = defineStore("counter", {
    // State
    state: () => ({
        count: 0,
        name: 'Pepe'
    }),
    // Getters
    getters:{
        dobleCount: (state) => {
            return state.count * 2
        },
        nameUpperCase: (state) => {
            return state.name.toUpperCase();
        }
    },
    // Actions
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        reverseName() {
            const reverse = this.name.split('').reverse().join('');
            this.name = reverse
        }
    }   
});
