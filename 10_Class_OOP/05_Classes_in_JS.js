class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeToUpper(){
        return `${this.username.toUpperCase()}`;
    }
}


const ssj = new user("Sheetal","ssj@gmail.com","23ssj23");
console.log(ssj.encryptPassword());
console.log(ssj.changeToUpper());


