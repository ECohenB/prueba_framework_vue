
import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Parent-Child Communication', () => {
  it('debería recibir el texto enviado desde el componente Child', async () => {
    const wrapper = mount(Parent);
    
    // Buscar el componente Child y el campo de texto
    const childWrapper = wrapper.findComponent(Child);
    const input = childWrapper.find('input');
    
    // Escribir un mensaje en el input del componente Child
    await input.setValue('Hola, Vue!');
    
    // Hacer clic en el botón para enviar el mensaje
    await childWrapper.find('button').trigger('click');
    
    // Verificar que el texto se haya recibido en el componente Parent
    expect(wrapper.text()).toContain('Texto recibido: Hola, Vue!');
  });
});
