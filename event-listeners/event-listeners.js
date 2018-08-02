// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg'];
var currentIndex = 0;

var firstpic = document.getElementsByTagName("img")[0];
firstpic.addEventListener("click", function (event) {
    alert("You clicked!");
var pictures = ["./imgs/dog.jpg","buckpalace.jpeg","londoneye.jpeg","shard.jpeg","telephone.jpeg"]
});
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
}