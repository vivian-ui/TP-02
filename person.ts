export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;

  constructor(
    firstname: string,
    middlename: string,
    lastname: string,
    age: number
  ) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName() {
    return 'Nome completo: ' + this.firstname + this.lastname;
  }

  getBirthdayYear() {
    return this.age;
  }
}
