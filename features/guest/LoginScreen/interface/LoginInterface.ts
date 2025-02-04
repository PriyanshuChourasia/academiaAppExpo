


export interface ILoginInterface{
    username:string,
    password:string
}


export interface ILoginResponseInterface{
    data:{
        name:string,
        email:string
    },
    token:string,
    message:string
}