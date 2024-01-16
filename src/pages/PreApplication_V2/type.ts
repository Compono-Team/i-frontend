export interface ApplicationFormParams {
  phoneNumber: string,
  name: string,
  expectation: string,
  email: string,
}

export interface AxiosError {
  code:string;
  config: Object;
  message: string;
  name: string;
  request:Object;
  response: {
    data:{
      code?:number;
      msg?:string;
    }
  }
}
