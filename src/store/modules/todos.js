import { currentUser } from '@/firebase/auth'
import { getTodoById, todoCollection } from '@/firebase/db'
import { addDoc, deleteDoc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload
      console.log('todos actualizadas:', payload)
    },
  },
  actions: {
    addTodo: async ({ commit }, todoText) => {
      try {
        const userId = currentUser()?.uid

        const newTodo = {
          userId,
          task: todoText,
          isCompleted: false,
          createdAt: new Date().toLocaleString(),
        }

        await addDoc(todoCollection, newTodo)
      } catch (error) {
        console.error('Error al crear todo:', error)
      }
    },
    fetchTodos: async ({ commit }) => {
      try {
        const userId = currentUser()?.uid
        if (!userId) throw new Error('Usuario no autenticado')

        const q = query(todoCollection, where('userId', '==', userId))

        onSnapshot(todoCollection, (snapshot) => {
          const todos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))

          commit('SET_TODOS', todos)
        })
      } catch (error) {
        console.error('Error al leer todos', error)
      }
    },
    deleteTodo: async (context, id) => {
      try {
        const doc = getTodoById(id)

        await deleteDoc(doc)
      } catch (error) {
        console.error('Error al eliminar tarea', error)
      }
    },
    updateTodo: async (context, { id, ...fields }) => {
      try {
        const todoRef = getTodoById(id)
        await updateDoc(todoRef, fields)
      } catch (error) {
        console.error('Error al editar todo', error)
      }
    },
  },
  getters: {},
}
