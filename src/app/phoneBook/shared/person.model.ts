export class Person {
  id: number;
  firstName: string;
  secondName: string;
  phone: string;
  address: string;
  createdAt: string;

  constructor(params?: any) {
    for (let key in params) {
      (<any>this)[key] = params[key];
    }
  }
}
