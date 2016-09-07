// /* In this repo your job is to write functions to make each function call work properly.
// Below is a sample problem
//
//   //code here for sayHi

  //  sayHi('Hi Katie', function(thingToSay){
  //     alert(thingToSay);
  //  });

// and what you should write is the sayHi function that makes the code above work,


  //  var sayHi = function(str, cb){
  //   cb(str);
  //  }
   //
  //  sayHi('Hi Katie', function(thingToSay){
  //     alert(thingToSay); //should alert ('Hi Katie')'
  //  });


// */



//   //Code Here for first

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//
// // My Code
// function first (names, cbFunc) {
//   cbFunc(names[0]);
// }
// // End
// first(names, function(firstName){
//   console.log('The first name in names is ' + firstName)
// });



// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//   //Code Here for last
// My Code
// function last(names, cbFunc) {
//   cbFunc(names[names.length -1]);
// }
// //End
// last(names, function(lastName){
//   console.log('The last name in names is ' + lastName);
// });
//
//
//


// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//
//
//   //Code Here for multiply
// My Code
// function multiply(num1, num2, cbFunc) {
//   cbFunc(num1 * num2);
// }
// End
// multiply(4, 3, function(answer){
//   console.log('The answer is ' + answer); //should console.log 12
// })





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//
//   //Code Here for contains
//var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//
// function contains(names, person, cbFunc) {
//
//     for (var i = 0; i < names.length;  i++) {
//       cbFunc(names[i] === person);
//
//   }
// }
//
// contains(names, 'Colt', function(result){
//   if(result === true){
//     console.log('Colt is in the array');
//   } else {
//     console.log('Colt is not in the array');
//   }
// });





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//
// function uniq(arr , cbFunc) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1){
//       newArr.push(arr);
//
//     }
//     cbFunc(newArr);
//   }
// }
//
//
//     //Code Here for uniq
//
// uniq(names, function(uniqArr){
//   console.log('The new names array with all the duplicate items removed is ', uniqArr);
// });
//




// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//
//  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//
// function each(arr, cbFunc){
//   for (var i = 0; i < arr.length; i++){
//     cbFunc(arr[i], i);
//
//   }
// }
//
// each(names, function(item, indice){
//   console.log('The item in the ' + indice + ' position is ' + item)
// });
//
//
//
//

// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// My Code
function getUserById(user, identifier, cbFunc) {
  for (var i = 0; i < users.length; i++) {
    if (user[i].id === identifier) {
       cbFunc(user[i]);
    }
  }
}
// End
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
