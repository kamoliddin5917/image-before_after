const foo = () => {
  let sliderValue = document.querySelector("#slider").value;
  document.querySelector("#my-image").style.clipPath =
    "polygon(0 0," + sliderValue + "% 0," + sliderValue + "% 100%,0 100%)";
};
