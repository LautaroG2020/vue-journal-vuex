import { createStore } from 'vuex'
import journalModule from '../modules/daybook/store/journal'


const store = createStore({
    //tengo que declarar todos los modulos existentes
    modules: {
        journalModule
    }
})

export default store