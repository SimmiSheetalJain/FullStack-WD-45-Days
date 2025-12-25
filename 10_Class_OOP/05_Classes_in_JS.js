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

const ssj = new user("Sheetal", "ssj@gmail.com", "23ssj23");
console.log(ssj.encryptPassword());
console.log(ssj.changeToUpper());

/**\
 What this code really is (Important Truth)

ES6 classes are just syntactic sugar over constructor functions + prototypes.

code is internally equivalent to:

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

user.prototype.changeToUpper = function () {
    return `${this.username.toUpperCase()}`;
};
 */
