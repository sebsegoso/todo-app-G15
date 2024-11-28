<template>
    <div>
        <h2>Tareas</h2>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <ToDoListItem :todo="todo" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ToDoListItem from "./ToDoListItem.vue"
export default {
    components: { ToDoListItem },
    computed: {
        ...mapState("todos", ["todos"])
    },
    methods: {
        ...mapActions("todos", ["fetchTodos"]),

    },
    async mounted() {
        await this.fetchTodos()
    }
}
</script>

<style scoped></style>