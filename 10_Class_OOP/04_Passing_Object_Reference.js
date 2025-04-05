function setUser(user){
    this.user = user;
    console.log("User name set!!");    
}

function createUser(user, password, email){
    setUser.call(this, user); //If we don't pass this keyword and user call(), the function will be called but the user name will not be set, so to try so just call setUser(user)
    // setUser(user);
    this.email = email;
    this.password =  password;
}

const user1 = new createUser("Sheetal","Simmi123","Simmi@gmail.com")

console.log(user1);