<template>
    <form @submit.prevent="createTodo">
        <input v-model="newTaskInput" type="text" placeholder="Ingresa una nueva tarea...">
        <button :disabled="!newTaskInput.trim()" type="submit">Agregar</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            newTaskInput: ""
        }
    },
    methods: {
        ...mapActions("todos", ["addTodo"]),
        async createTodo() {
            const value = this.newTaskInput.trim()
            if (value) {
                await this.addTodo(value)
                this.newTaskInput = ""
            }
        }
    }
}
</script>

<style scoped></style>