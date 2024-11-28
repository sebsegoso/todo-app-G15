<template>
    <div v-if="todo">
        <!-- si está en modo editar, muestra input. Si no, muestra span con texto -->
        <input v-if="isEditing" type="text" v-model="editTaskText">
        <span v-else>{{ todo.task }}</span>
        <!-- si está en modo editar, muestra botón cancelar. Si no, muestra botón editar -->
        <button @click="startEdit" v-if="!isEditing">Editar</button>
        <template v-else>
            <button @click="saveEdit">Confirmar</button>
            <button @click="cancelEdit">Cancelar edición</button>
        </template>
        <button v-if="!isEditing" @click="deleteTodo(todo.id)">x</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isEditing: false,
            editTaskText: ""
        }
    },
    methods: {
        ...mapActions("todos", ["deleteTodo", "updateTodo"]),
        startEdit() {
            this.isEditing = true
            this.editTaskText = this.todo.task
        },
        cancelEdit() {
            this.isEditing = false
            this.editTaskText = ""
        },
        async saveEdit() {
            await this.updateTodo({ id: this.todo.id, task: this.editTaskText })
            this.isEditing = false
        }
    }
}
</script>

<style scoped></style>