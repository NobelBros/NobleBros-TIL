import "./styles.css";

const darkModeEl = document.querySelector("#darkMode");
const clockModeEl = document.querySelector("#clockMode");
const clockEl = document.querySelector(".clock");

const settingObj = {
  _darkMode: false,
  _clockMode: true,

  get darkMode() {
    return this._darkMode;
  },
  get clockMode() {
    return this._clockMode;
  },

  set darkMode(value) {
    this._darkMode = value;
    console.log("darkmode : ", this._darkMode);
  },
  set clockMode(value) {
    this._clockMode = value;
    console.log("clock : ", this._clockMode);
  },
};

darkModeEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    settingObj.darkMode = !settingObj.darkMode;
    document.body.classList.add("dark");
  } else {
    settingObj.darkMode = !settingObj.darkMode;
    document.body.classList.remove("dark");
  }
});

clockModeEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    settingObj.clockMode = false;
    clockEl.classList.remove("hidden");
  } else {
    settingObj.clockMode = true;
    clockEl.classList.add("hidden");
  }
});

var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector(".second").style.transform = `rotate(${second}deg)`;
}

setInterval(clock, inc);
