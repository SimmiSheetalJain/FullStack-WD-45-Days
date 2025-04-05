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


class host extends user{
    constructor(username, email, password,hostID, dept){
        super(username,email,password);
        this.hostID = hostID;
        this.dept = dept;
    }
    showHostDetails(){
        console.log(`
            user : ${this.username}\n
            email: ${this.email}\n
            password: ${this.password}\n
            hostID: ${this.hostID}\n
            dept: ${this.dept}`);
            }
}

const host1 = new host("Swagatika","swagatika.lnct@gmail.com","ssh123",123,"MCA");
host1.encryptPassword();
host1.showHostDetails();