<<<<<<< HEAD
const validJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

console.log('Test 1: ',validJSON('{"user":"See",role:"BE"}'));
console.log('Test 2: ', validJSON('{"user":"See","role" : "Full-Stack"}'));
=======
const validJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

console.log('Test 1: ',validJSON('{"user":"See",role:"BE"}'));
console.log('Test 2: ', validJSON('{"user":"See","role" : "Full-Stack"}'));
>>>>>>> 2884a31763f9bede8450d3d9089ca9df8d9e043a
console.log('Test 3: ',validJSON([3,4,68,6]));