// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from ndoe.js');
// ========================

// var name = 'Max';
// var age = 20;
// var hasHobbies = true; 

// const sumarizeUser = (userName, userAge, userHobby) => {
//     return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHobby 
// }

// console.log(sumarizeUser(name, age, hasHobbies))

// =======================
// const person = {
//     name : "Max",
//     age : 20,
//     greet() {
//         console.log('Hi, I am' + this.name)
//     }
// };

// const hobbies = ['Sports', 'Cooking']

// // console.log(hobbies.map(hobby => 'Hobby: '+ hobby))
// hobbies.push("aaa")
// console.log(hobbies)

// const copyHobby = [...hobbies]
// console.log(copyHobby)

// const copyPerson = {...person}
// console.log(copyPerson)

// ==========================

// const hobbies = ['Sports', 'Cooking'];
// const [h1,h2] = hobbies;
// ==========================
// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 1500);
//     });
//     return promise;
// };


// setTimeout(()=>{
//     console.log('Timer is DONE');
//     fetchData().then(text => {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2 => {
//         console.log(text2)
//     })
// }, 2000);

// console.log('Hello!');
// console.log('Hi!');