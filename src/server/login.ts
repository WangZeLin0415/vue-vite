import { State } from '../pages/user/login.d';
interface Res {
    code:number;
    mes:string;
}
export const loginApi = async (params:State):Promise<Res> => {
    return new Promise((resolve)=>{
        console.log(params)
        if(params.username === 'admin' && params.password === 'admin') {
            resolve({code:1,mes:'登陆成功'})
        }else {
            resolve({code:0,mes:'账号或密码错误'})
        }
    })
}

