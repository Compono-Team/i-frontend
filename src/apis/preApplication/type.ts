export interface PreApplicationParams {
  phoneNumber:string;
  name:string;
  expectation:string;
  email:string;
}

export interface PreApplicationResponse {
  id : number;
  email : string;
  name : string;
  phoneNumber : string;
  expectation : string;
  createdAt: string;
}
