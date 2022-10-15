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
