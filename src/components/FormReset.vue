<template>
  <div class="container">

    <h1>Form Abogado</h1>

    <form @submit.prevent="actualizarAbogado" class="mt-5">

      <div class="input-field">
        <input type="text" v-model="matricula" id="matricula" class="validate square">
        <label for="matricula">Matrícula:</label>
      </div>

      <div class="input-field">
        <select v-model="estadoAbogado" id="estadoAbogado" class="square">
          <option value="" disabled selected>Seleccionar</option>
          <option value="CONCLUIDO">CONCLUIDO</option>
          <option value="INHABILITADO">INHABILITADO</option>

        </select>
        <label for="estadoAbogado">Estado de Abogado:</label>
      </div>
      
      <div class="input-field">
        <select v-model="estadoRegistro" id="estadoRegistro" class="square">
          <option value="" disabled selected>Seleccionar</option>
          <option value="CON JURAMENTO">CON JURAMENTO</option>
          <option value="MATRICULA NO VIGENTE">MATRICULA NO VIGENTE</option>
        </select>
        <label for="estadoRegistro">Estado de Registro:</label>
      </div>
      
      <div class="input-field">
        <input type="date" v-model="fechaCredencialVencimiento" id="fechaCredencialVencimiento" class="square">
        <label for="fechaCredencialVencimiento">Fecha de vencimiento de credencial:</label>
      </div>
      
      <button type="submit" class="btn waves-effect waves-light square">Actualizar</button>

    </form>

    <div v-if="mensaje" class="mt-3">
      <p class="alert alert-info">{{ mensaje }}</p>
      <p v-if="datos" class="alert alert-success">Datos: {{ datos }}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'; 

export default {
  data() {
    return {
      matricula: '', 
      estadoAbogado: null,
      estadoRegistro: null,
      fechaCredencialVencimiento: '',
      mensaje: '',
      datos: null
    };
  },
  methods: {
    async actualizarAbogado() {
      try {
        const respuesta = await axios.get(`http://192.168.3.243/apirpaoficial/web/publico/abogado/${this.matricula}/actualizar-campo`, {
          params: {
            matricula: this.matricula,
            estadoAbogado: this.estadoAbogado,
            estadoRegistro: this.estadoRegistro,
            fechaCredencialVencimiento: this.fechaCredencialVencimiento
          }
        });

        
        this.mensaje = respuesta.data.mensaje;
        this.datos = respuesta.data.data;
      } catch (error) {
        console.error('Error al actualizar abogado:', error);
        this.mensaje = 'Error al actualizar abogado';
      }
    }
  },
  mounted() {
    const selectElements = document.querySelectorAll('select');
    M.FormSelect.init(selectElements);
  }
};
</script>

<style scoped>

</style>
