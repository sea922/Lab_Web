const parseHTTPCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((employee, v) => {
      employee[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return employee;
    }, {});
console.log(parseHTTPCookie('user=see; role=full-stack'));