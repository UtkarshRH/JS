function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("Called");
}

// Call method is used to get pass the current execution context to another function

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@fb.com", 123);
console.log(chai);
