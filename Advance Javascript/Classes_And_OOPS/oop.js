const user = {
  username: "Utkarsh",
  loginCount: 8,
  signedIn: true,
  getUserDetail: function () {
    console.log(`Got user Detail`);
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Utkarsh", 12, true);
const userTwo = new User("Harshe", 5, false);
console.log(userOne.constructor);
console.log(userTwo);
