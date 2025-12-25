class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeToUpper() {
    return `${this.username.toUpperCase()}`;
  }
}

class host extends user {
  constructor(username, email, password, hostID, dept) {
    super(username, email, password);
    this.hostID = hostID;
    this.dept = dept;
  }
  showHostDetails() {
    console.log(`
            user : ${this.username}\n
            email: ${this.email}\n
            password: ${this.password}\n
            hostID: ${this.hostID}\n
            dept: ${this.dept}`);
  }
}
/**
What extends actually does
class host extends user


Internally:

host.prototype is linked to user.prototype

This creates the inheritance chain

Conceptually:

host.prototype → user.prototype → Object.prototype → null


So host automatically gets access to:

encryptPassword()

changeToUpper()
 */
const host1 = new host(
  "Swagatika",
  "swagatika.lnct@gmail.com",
  "ssh123",
  123,
  "MCA"
);
host1.encryptPassword();
host1.showHostDetails();
