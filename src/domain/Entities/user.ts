export default class User {
  name: string;
  email: string;
  password: string;
  photo: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.password = "";
    this.photo = "";
  }
}
