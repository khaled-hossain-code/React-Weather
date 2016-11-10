// function getTempPromise(location){
//     return new Promise(function(resolve,reject){
//         resolve("25");
//         reject("City Not found");
//     })
// };


// getTempPromise("dhaka").then(function(temp){
//     console.log(`Successful temp is ${temp}`);
// },function(err){
//     console.log(`Error found`);
// })
var Promise = require('bluebird');

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("One of input is not string in Addition");
        }
    });
}

function mulPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a * b);
        } else {
            reject("One of input is not string in Multiply");
        }
    })
}

//promise in series
// addPromise(10, 20)
//     .then(response => {
//         console.log(`Result of Add ${response}`);
//         return mulPromise(10, 20);
//     })
//     .then(response => {
//         console.log(`Result of Mul ${response}`);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//promise in parallel in arrays
Promise.all([ addPromise(10, 20), mulPromise(10, 20) ])
    .then(values =>{
        console.log('Values are ', values.map( v => v.data))
    })
    .catch(err =>{
        console.log(err);
    })