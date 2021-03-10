export interface Action {
    type:'string';
    payload : State;
}

export interface State {
    username:string;
    password:string;
}