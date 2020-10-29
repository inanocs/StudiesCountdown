window.addEventListener("load", () => {
  const daysElement = document.getElementById("day");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  setInterval(() => {
    setDate(daysElement, hoursElement, minutesElement, secondsElement);
  }, 1000);

  setInterval(createSnowFlake, 500);

  const toggleButton = document.getElementById("toggle");

  toggleButton.addEventListener("click", () => {
    const counterBoxes = [...document.querySelectorAll(".counter-item")];
    document.body.classList.toggle("dark-mode");

    counterBoxes.forEach((item) => {
      item.classList.toggle("counter-item--dark-mode");
    });
  });
});

// Function that setDate
const setDate = (daysElement, hoursElement, minutesElement, secondsElement) => {
  const today = new Date().getTime();
  const dateEnd = new Date(2021, 5, 21, 14, 00, 00, 00).getTime();

  let totalTime = (dateEnd - today) / 1000;

  let days = Math.ceil(totalTime / (3600 * 24));
  let hours = Math.ceil((totalTime / 3600) % 24);
  let minutes = Math.ceil((totalTime / 60) % 60);
  let seconds = Math.ceil(totalTime % 60);

  if (hours == 24) {
    hours = 0;
    days++;
  }

  if (minutes == 60) {
    minutes = 0;
    minutes = minutes.toString() + "0";
    hours++;
  }

  if (seconds == 60) {
    seconds = 0;
    seconds = seconds.toString() + "0";
  }
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
};

const createSnowFlake = () => {
  const fragment = document.createDocumentFragment();
  const snowFlake = document.createElement("div");
  snowFlake.classList.add("snowFlake");

  snowFlake.style.left = Math.random() * 95 + "vw";
  fragment.appendChild(snowFlake);

  document.body.appendChild(fragment);

  setTimeout(() => {
    snowFlake.remove();
  }, 2350);
};
