
<template>
    <div>
      <input v-model="mensaje" type="text" placeholder="Escribe algo..." />
      <button @click="enviarTexto">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child',
    data() {
      return {
        mensaje: ''
      };
    },
    methods: {
      enviarTexto() {
        this.$emit('enviarTexto', this.mensaje);
        this.mensaje = ''; // Limpiar el campo después de enviar
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agregar estilos aquí si lo necesitas */
  </style>
  