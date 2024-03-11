<template>
  <form @submit.prevent="handleSubmit">


    <label for="matricula">Matrícula:</label>
    <input type="text" v-model="matricula" required>

    <label for="estadoRegistro">Estado de Registro:</label>
    <select v-model="estadoRegistro">
      <option 
        v-for="(option, index) in ['MATRICULA NO VIGENTE', 'CON JURAMENTO']" 
        :key="index" 
        :value="option">{{ option }}</option>
    </select>

    <label for="estadoAbogado">Estado de Abogado:</label>
    <select v-model="estadoAbogado">
      <option 
        v-for="(option, index) in ['CONCLUIDO', 'PENDIENTE', 'INHABILITADO']" 
        :key="index" 
        :value="option">{{ option }}</option>
    </select>

    <label for="fechaCredencialVencimiento">Fecha de Vencimiento:</label>
    <input type="date" v-model="fechaCredencialVencimiento">
    <button type="submit">Actualizar</button>


  </form>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'FormReset',
  data() {
    return {
      matricula: '',
      estadoRegistro: '',
      estadoAbogado: '',
      fechaCredencialVencimiento: ''
    };
  },
  computed: {
    ...mapGetters({
      matriculaGlobal: 'global/getMatricula',
      estadoRegistroG: 'global/getEstadoRegistro',
      estadoAbogadoG: 'global/getEstadoAbogado',
      fechaCredencialVencimientoG: 'global/getFechaCredencialVencimiento'
    })
  },
  methods: {
    async handleSubmit() {
      const matricula = this.matricula || this.matriculaGlobal; 
      try {
        const apiUrl = 'http://192.168.3.243/apirpaoficial/web/publico/abogado'
        const response = await axios.get(`${apiUrl}/${matricula}/actualizar-campo`, {
          params: {
            estadoRegistro: this.estadoRegistro || this.estadoRegistroG,
            estadoAbogado: this.estadoAbogado || this.estadoAbogadoG,
            fechaCredencialVencimiento: this.fechaCredencialVencimiento || this.fechaCredencialVencimientoG
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error en el servidor:', error);
      }
    }

  }
};
</script>

<style>
/* Agrega estilos según sea necesario */
</style>
