class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  /* 
    here we use the static keyword
  
    static keyword is used in classes and class methods to define a static method or property. 
    Static members belong to the class itself rather than instances of the class.
    This means they are accessed directly from the class and not from instances of the class.
  */
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
