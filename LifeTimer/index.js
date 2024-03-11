let isOpen = false;
let dateOfBirth;

const settingIcons = document.getElementById("settingIcons");
const icon = document.getElementById("icon");
const initialText = document.getElementById("initialText");
const afterText = document.getElementById("afterText");
const button = document.getElementById("btn");
const dateSelector = document.getElementById("dateSelector");
const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function toggle() {
  if (isOpen) {
    icon.classList.add("hide");
  } else {
    icon.classList.remove("hide");
  }
  isOpen = !isOpen;
}

function makeTwoDigitNumber(number) {
  return number > 9 ? number : `0${number}`;
}

function updateAge() {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearElement.innerHTML = makeTwoDigitNumber(year);
  monthElement.innerHTML = makeTwoDigitNumber(month);
  dayElement.innerHTML = makeTwoDigitNumber(day);
  hourElement.innerHTML = makeTwoDigitNumber(hour);
  minuteElement.innerHTML = makeTwoDigitNumber(minute);
  secondElement.innerHTML = makeTwoDigitNumber(second);
}

function updateButton() {
  const datestring = dateSelector.value;
  dateOfBirth = datestring ? new Date(datestring) : null;

  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");

  if (year && month && date) {
    dateOfBirth = new Date(year, month, date);
  }

  if (dateOfBirth) {
    localStorage.setItem("year", dateOfBirth.getFullYear());
    localStorage.setItem("month", dateOfBirth.getMonth());
    localStorage.setItem("date", dateOfBirth.getDate());

    afterText.classList.remove("hide");
    initialText.classList.add("hide");
    setInterval(() => updateAge(), 1000);
  } else {
    initialText.classList.remove("hide");
    afterText.classList.add("hide");
  }
}
updateButton();

settingIcons.addEventListener("click", toggle);
button.addEventListener("click", updateButton);
