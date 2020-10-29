window.addEventListener("load", () => {
  const daysElement = document.getElementById("day");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  setInterval(() => {
    setDate(daysElement, hoursElement, minutesElement, secondsElement);
  }, 1000);

  const toggleButton = document.getElementById("toggle");
  const body = document.querySelector("body");
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});

const setDate = (daysElement, hoursElement, minutesElement, secondsElement) => {
  const today = new Date();
  const dateEnd = new Date(2021, 6, 21);

  let totalTime = (dateEnd - today) / 1000;

  let days = Math.ceil(totalTime / (3600 * 24));
  let hours = Math.ceil((totalTime / 3600) % 24);
  let minutes = Math.ceil((totalTime / 60) % 60);
  let seconds = Math.ceil(totalTime % 60);

  if (hours == 24) {
    hours = 0;
    days++;
  }

  if (minutes == 59) {
    minutes = 0;
    minutes = minutes.toString() + "0";
    hours++;
  }

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
};
