<template>
  <main>
    <!-- si usuario existe  -->
    <div v-if="user">
      <h1>Hola! {{ user.displayName }}</h1>

      <ToDoListForm />
      <ToDoList />
    </div>
    <!-- si usuario no existe -->
    <div v-else>
      <h1>Debes iniciar sesión para ver la página</h1>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ToDoList from '@/components/todos/ToDoList.vue'
import ToDoListForm from '@/components/todos/ToDoListForm.vue'
export default {
  components: { ToDoList, ToDoListForm },
  computed: {
    ...mapState("auth", ["user"])
  }
}
</script>
