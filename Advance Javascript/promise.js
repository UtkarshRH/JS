// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Async Task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   // using the .then we are connecting the resolve
//   console.log("Promise Consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async Task 2 resolved");
// });

// // Lets pass something
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ username: "Utkarsh", Emal: "utkarshharshe@gmail.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// // Lets try to get error in reject

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({
//         message: "Here Every Thing is Clear: ",
//         username: "Utkarsh",
//         email: "utkarshharshe@gmail.com",
//       });
//     } else {
//       reject("Error: Something Went Wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     // here we are getting the value from the user i.e : username
//     console.log(username);
//   })
//   .catch((error) => {
//     // Here we handle the error gracefully using the catch
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise Is Either Resolve Or Reject");
//   });

// --------------------Lets Use async await  to handle the asynchronous operation

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Utkarsh", email: "utkarhharshe@gmail.com" });
//     } else {
//       reject("Error: Something Went Wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const responce = await promiseFive;
//     console.log(responce);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// ----------------------- async/await

// async function getAllUser() {
//   try {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await responce.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUser();

fetch("https://api.github.com/users/UtkarshRH")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
