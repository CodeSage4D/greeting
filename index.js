let time = new Date();
console.log(time);
console.log(time.getHours());
let hours = time.getHours();

if (hours > 12 && hours < 24) {
  document.getElementById("greet").innerHTML = "Good morning";
  document.getElementById("greet").style.color = "Blue";
} else if (hours <= 12 && hours >= 12) {
  document.getElementById("greet").innerHTML = "Good afternoon";
  document.getElementById("greet").style.color = "Red";
} else if (hours >= 17 && hours <= 24) {
  document.getElementById("greet").innerHTML = "Good evening";
  document.getElementById("greet").style.color = "Yellow";
} else if (hours >= 20 && hours <= 24) {
  document.getElementById("greet").innerHTML = "Good night";
  document.getElementById("greet").style.color = "Green";
}
