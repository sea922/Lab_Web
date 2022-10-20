<<<<<<< HEAD
var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = today.toLocaleString('en-us', {  weekday: 'long' })
var time  = today.toLocaleTimeString('en-us');
console.log('Today is: ', date);

console.log('Current time is: ', time);
=======
var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = today.toLocaleString('en-us', {  weekday: 'long' })
var time  = today.toLocaleTimeString('en-us');
console.log('Today is: ', date);

console.log('Current time is: ', time);
>>>>>>> 2884a31763f9bede8450d3d9089ca9df8d9e043a
