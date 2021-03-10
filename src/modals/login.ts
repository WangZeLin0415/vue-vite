import { loginApi } from '../server/login';
import {State,Action} from '../pages/user/login.d';

const login = {
    namespaced:true,
    state() {
        return {
            name:'login'
        }
    },
    getters:{

    },
    mutations:{

    },
    actions: {
        async login({},action:Action){
            return await new Promise((resolve,reject)=>{
                resolve(loginApi(action.payload))
            })
        }
    }
}

export default login;