interface State {
    count:number;
}
interface Payload {
    type:string;
    [key:string]:any;
}
const global = {
    state(){
        return {
            count:0,
        }
    },
    getters:{
        add:(state:State)=>(id:number)=>{
            return state.count + id;
        }
    },
    mutations:{
        increment(state:State,payload:Payload){
            state.count++
        }
    },
    actions:{
        
    },
}

export default global;