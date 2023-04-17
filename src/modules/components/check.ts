import { ILoginParameter,ILoginValidaTion } from "../../models/auth";

export const ErrorEmails = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getErrorMessageResponse = (response: any) => {
    if (typeof response?.message === 'string') {
      return response?.message;
    }
  
    if (response?.message?.details[0]) {
      return response?.message?.details[0]?.message;
    }
  
    return '';
  };

const ValidateEmail = (email: string) =>{
    if(!email){
        //anh sửa  thành id tất cả những  cái cũ 
        return 'yeuCauNhapEmail';
    }
    if( !ErrorEmails.test(email)){
        return 'emailKhongHopLe';
    }
    else{
        return '';
    }
}

const ValidatePassword = (Password: string) =>{
    if(!Password){
        return 'nhapMatKhau';
    }
    if(Password.length < 4){
        return 'matKhau4kt';
    }
    else{
        return '';
    }
}

export const ValidateLogin = (value:ILoginParameter) : ILoginValidaTion => {
    return {
        email: ValidateEmail(value.email),
        password: ValidatePassword(value.password),
    };
}


export const ValidLogin = (value: ILoginValidaTion) =>{
    return !value.email && !value.password;
}
