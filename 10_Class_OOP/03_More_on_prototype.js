/**
 * Task :
 * Suppose We have a string 
 * 
 * const name = "Sheetal     "
 * Now, when we extract its length, whitspaces will be counted
 * 
 * We want that only length of characters should be counted. For that we need to define a method for string object. 
 * Say the method is actualLength()
 * 
 * Remember: We don't want to use trim. (can be done )
 */

// Let's know inheritance 
let books = ["The Diary of CEO", "Think Like a Monk","Think and Grow Rich","IKIGAI"]

let booksGenre = {
    entrepreneurial : "The Diary of a CEO",
    lifeskill : "Think Like a Monk",
    selfhelp : "Think and Grow Rich",
    lifestyle : "IKIGAI",

    getGenre : function(){
        if ("The Diary of a CEO"){
            return "entrepreneurial";
        }
        if ("Think Like a Monk"){
            return "lifeskill";
        }
        if ("Think and Grow Rich"){
            return "selfhelp";
        }
        if ("IKIGAI"){
            return "lifestyle";
        }
    }
}

const bookMall ={
    mallId : 234323,
    address: "Agra, U.P.",
    owner: "Sheetal Jain",
    __proto__: booksGenre  //This line inherits booksGenre, but it is outdated
}
//The above syntax for inheritance is old way

/** Modern Way
 * Object.setPrototypeOf(bookMall,booksGenre);
 * 
 * */



//Solution to the Task, we can inject the function to the parent class, which is mothing but  String
String.prototype.actualLength = function(){
    return `The actual lenght is : ${this.trim().length}`;
}

const stu = "Sheetal            ";
console.log(stu.actualLength());

























