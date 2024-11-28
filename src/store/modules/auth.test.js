import authModule from './auth'

describe('auth module vuex', () => {
  let state
  let commit

  beforeEach(() => {
    state = { user: null }
    commit = jest.fn() // Mock de commit
  })

  describe('mutations', () => {
    it('SET_USER debe establecer el usuario en el estado', () => {
      authModule.mutations.SET_USER(state, { name: 'John Doe', email: 'john@example.com' })
      expect(state.user).toEqual({ name: 'John Doe', email: 'john@example.com' })
    })
  })
})
