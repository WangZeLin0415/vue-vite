import {createStore,createLogger } from 'vuex';
import global from './global';
import login from './login'



const store = createStore({
    ...global,
    modules:{
        login,
    },
    plugins:[createLogger()],
    // strict:process.env.NODE_ENV !== 'production'
})

export default store;