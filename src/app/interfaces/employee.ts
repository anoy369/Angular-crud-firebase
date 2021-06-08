export interface Employee {
  id: string;
  name: string;
  designation: string;
  age: number;
  phone: number;
  address: string;
  email: string;
  linkedin: string;
}


export const DEFAULT_EMPLOYEE: Employee = {
  id: null,
  name: '',
  age: 0,
  phone: 0,
  address: '',
  designation: '',
  email: '',
  linkedin: ''
}
