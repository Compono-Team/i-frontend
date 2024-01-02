export interface InputText {
  name : string;
  phoneNumber : string;
  email : string;
  expectation : string;
  [key: string]: string; // Index signature
}
