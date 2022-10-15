function Exercise2() {
  var copyText = document.getElementById("GfGInput");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
} 