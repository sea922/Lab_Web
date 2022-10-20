<<<<<<< HEAD
var data = {
  name: "seee",
  age: "22",
  name: "poman",
  age: "21",
  name: "teddy",
  age: "24",
};

var jsonData = JSON.stringify(data);

var fs = require("fs");

fs.writeFile("test.txt", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
=======
var data = {
  name: "seee",
  age: "22",
  name: "poman",
  age: "21",
  name: "teddy",
  age: "24",
};

var jsonData = JSON.stringify(data);

var fs = require("fs");

fs.writeFile("test.txt", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
>>>>>>> 2884a31763f9bede8450d3d9089ca9df8d9e043a
