import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import MiContador from '@/components/MiContador.vue';

const store = createStore({
  state: {
    contador: 0,
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar');
    },
    decrementar({ commit }) {
      commit('decrementar');
    },
  },
  getters: {
    valorContador(state) {
      return state.contador;
    },
  },
});

describe('MiContador.vue', () => {
  const wrapper = mount(MiContador, {
    global: {
      plugins: [store],
    },
  });

  it('debe mostrar el valor inicial del contador', () => {
    expect(wrapper.text()).toContain('0');
  });

  it('debe incrementar el contador al hacer clic en "Incrementar"', async () => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('1');
  });

  it('debe decrementar el contador al hacer clic en "Decrementar"', async () => {
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.text()).toContain('0');
  });
});
