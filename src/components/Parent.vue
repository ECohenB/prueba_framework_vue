
<template>
    <div>
      <h2>Comunicando Componentes</h2>
      <p>Texto recibido: {{ texto }}</p>
      <Child @enviarTexto="recibirTexto" />
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    name: 'Parent',
    components: {
      Child
    },
    data() {
      return {
        texto: ''
      };
    },
    methods: {
      recibirTexto(mensaje) {
        this.texto = mensaje;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agregar estilos aquí si lo necesitas */
  </style>
  