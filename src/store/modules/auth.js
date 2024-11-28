import { currentUser, loginWithGoogle, logout as logoutUser } from '@/firebase/auth'

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload
      console.log('usuario actualizado:', state.user)
    },
  },
  actions: {
    checkAuth: async ({ commit }) => {
      const user = currentUser()
      if (user) commit('SET_USER', user)
    },
    login: async (context) => {
      try {
        const result = await loginWithGoogle()
        context.commit('SET_USER', result.user)
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
      }
    },
    logout: async (context) => {
      await logoutUser()
      context.commit('SET_USER', null)
    },
  },
}
