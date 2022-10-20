<<<<<<< HEAD
const parseHTTPCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((employee, v) => {
      employee[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return employee;
    }, {});
=======
const parseHTTPCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((employee, v) => {
      employee[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return employee;
    }, {});
>>>>>>> 2884a31763f9bede8450d3d9089ca9df8d9e043a
console.log(parseHTTPCookie('user=see; role=full-stack'));