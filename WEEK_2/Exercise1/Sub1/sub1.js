var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = today.toLocaleString('en-us', {  weekday: 'long' })
var time  = today.toLocaleTimeString('en-us');
console.log('Today is: ', date);

console.log('Current time is: ', time);
