const button = document.getElementById("asus");
const ya = document.getElementById("ya");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const test = document.querySelector(".jir");
const tempatSampah = document.getElementById("tempatSampah");
let isDragging = false;
let offsetX, offsetY;
function pindah() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newLeft = Math.random() * (windowWidth - button.offsetWidth);
  const newTop = Math.random() * (windowHeight - button.offsetHeight);

  button.style.left = newLeft + "px";
  button.style.top = newTop + "px";
}
button.addEventListener("mouseenter", pindah);

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    button.removeEventListener("mouseenter", pindah);
    button.style.left = event.clientX - offsetX + "px";
    button.style.top = event.clientY - offsetY + "px";
  }
});
document.addEventListener("mouseup", function () {
  isDragging = false;
  button.addEventListener("mouseenter", pindah);
  button.style.cursor = "grab";
});

tempatSampah.addEventListener("dragover", function (event) {
  console.log("test");
  event.preventDefault();
});

tempatSampah.addEventListener("drop", function (event) {
  button.classList.add("hidden");
  event.preventDefault();
});

button.addEventListener("mousedown", function (event) {
  isDragging = true;
  offsetX = event.clientX - button.offsetLeft;
  offsetY = event.clientY - button.offsetTop;
  button.style.cursor = "grabbing";
});

ya.addEventListener("click", function () {
  test.innerHTML = `<h3>
          TERIMAKASIH <br />
          SUDAH BELANJA DI TEMPAT KAMI
        </h3>`;
  slide1.classList.add("iqoo");
  slide2.classList.remove("vivo");
});
