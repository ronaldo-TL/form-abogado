
const state = {
    matricula: null,
    estadoRegistro: '',
    estadoAbogado: '',
    fechaCredencialVencimiento: ''
}
const mutations = {
    SET_PARAMS(state, { matricula, estadoRegistro, estadoAbogado, fechaCredencialVencimiento }) {
        state.matricula = matricula;
        state.estadoRegistro = estadoRegistro;
        state.estadoAbogado = estadoAbogado;
        state.fechaCredencialVencimiento = fechaCredencialVencimiento;
      }
}
const actions = {

}

const getters = {
  
    getMatricula: state => state.matricula,
    getEstadoRegistro: state => state.estadoRegistro,
    getEstadoAbogado: state => state.estadoAbogado,
    getFechaCredencialVencimiento: state => state.fechaCredencialVencimiento
};

export default {
    state,
    mutations,
    actions,
    getters
};
  