<template>
  <div>
    <p>{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
export default {
  computed: {
    // Usamos un getter para obtener el valor del contador
    contador() {
      return this.$store.getters.valorContador;
    },
  },
  methods: {
    // Usamos las acciones para modificar el contador
    incrementar() {
      this.$store.dispatch('incrementar');
    },
    decrementar() {
      this.$store.dispatch('decrementar');
    },
  },
};
</script>

  