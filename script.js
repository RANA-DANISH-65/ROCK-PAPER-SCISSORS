const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user img");
const cpuResult = document.querySelector(".cpu img");
const result = document.querySelector(".head");
const options = document.querySelectorAll(".img");

const checkWinner = (cp, up) => {
  if (cp == up) {
    result.innerHTML = "Draw!!";
  } else if (
    (cp == "R" && up == "P") ||
    (cp == "S" && up == "R") ||
    (cp == "P" && up == "S")
  ) {
    result.innerHTML = "You Win!!";
  } else {
    result.innerHTML = "You Lose!!";
  }
};
const refreshgame = () => {
  options.forEach((image) => {
    image.classList.remove("active");
    image.classList.remove("pointer");
  });
};

options.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "rock.jpg";
    result.textContent = "Wait...";
    options.forEach((image) => {
      image.classList.add("pointer");
    });
    gameContainer.classList.add("L");
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imgSrc = e.target.src;

      userResult.src = imgSrc;
      let randomNum = Math.floor(Math.random() * 3);

      let cpuValue = ["R", "S", "P"][randomNum];
      let userValue = ["R", "S", "P"][index];
      checkWinner(cpuValue, userValue);

      refreshgame();
    }, 2500);
  });
});


