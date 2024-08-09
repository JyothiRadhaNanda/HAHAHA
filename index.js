const button = document.getElementById("asus");
const ya = document.getElementById("ya");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
button.addEventListener("click", function () {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newLeft = Math.random() * (windowWidth - button.offsetWidth);
  const newTop = Math.random() * (windowHeight - button.offsetHeight);

  button.style.left = newLeft + "px";
  button.style.top = newTop + "px";
});

ya.addEventListener("click", function () {
  slide1.classList.add("iqoo");
  slide2.classList.remove("vivo");
});
