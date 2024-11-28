import { shallowMount } from '@vue/test-utils'
import ToDoListForm from './ToDoListForm.vue'

describe('ToDoListForm', () => {
  it('Se renderiza el componente', () => {
    const wrapper = shallowMount(ToDoListForm)

    expect(wrapper.find('button').text()).toBe('Agregar')
    expect(wrapper.find('input').exists()).toBeTruthy()
  })

  it('al escribir en el input se actualiza el valor de newTaskInput', async () => {
    const wrapper = shallowMount(ToDoListForm)
    const input = wrapper.find('input')
    const inputValue = 'Nueva tarea'

    await input.setValue(inputValue)
    expect(wrapper.vm.newTaskInput).toBe(inputValue)
  })

  it('si newTaskInput no tiene valor, el botón debe estar deshabilitado', async () => {
    const wrapper = shallowMount(ToDoListForm)

    // vacío
    await wrapper.setData({
      newTaskInput: '',
    })

    const button = wrapper.find('button')
    expect(button.element.disabled).toBeTruthy()
  })
})
