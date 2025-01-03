export default class User {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = "";
    this.photo = "";
  }
}
