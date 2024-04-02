function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createrUser(username, score) {
  this.username = username;
  this.score = score;
}

createrUser.prototype.increment = function () {
  this.score++;
};

createrUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createrUser("Chai", 25);
const tea = createrUser("tea", 250);

chai.printMe();
// tea.printMe(); // This Will Give the error

//Notes on new Keyword

/*
Here What happen behine the scenes When the new keyword is used:

1 - A new object is created: The new keyword initiates the creation of a new JavaScript object.

2 - A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
    This means that it has access to properties and methods defined on the constructor's prototype.

3 - The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
    If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4 - The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
    the newly created object is returned.

*/
