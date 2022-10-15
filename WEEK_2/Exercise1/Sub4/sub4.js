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
console.log('Test 3: ',validJSON([3,4,68,6]));