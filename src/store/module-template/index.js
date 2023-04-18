//Es lo que vamos a terminar importando en el store de cada modulo(componente)

import state from './state'
import * as actions from './action'
import * as getters from './getters'
import * as mutations from './mutations'

const myCustomMudule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomMudule