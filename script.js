const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", (ev) => {
    ev.preventDefault();
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

const toastTrigger2 = document.getElementById("liveToastBtn2");
const toastLiveExample2 = document.getElementById("liveToast");
if (toastTrigger2) {
  toastTrigger2.addEventListener("click", (ev) => {
    ev.preventDefault();
    const toast = new bootstrap.Toast(toastLiveExample2);

    toast.show();
  });
}

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const date = setInterval(function updateDate() {
  let dateToday = new Date();

  let days = dateToday.getUTCDate();
  days = days.toString().padStart(2, "0");

  let months = dateToday.getUTCMonth() + 1;
  months = months.toString().padStart(2, "0");

  let years = dateToday.getFullYear();

  let hour = dateToday.getHours();

  let minute = dateToday.getUTCMinutes();
  minute = minute.toString().padStart(2, "0");

  let second = dateToday.getUTCSeconds();
  second = second.toString().padStart(2, "0");

  day.textContent = days;
  month.textContent = months;
  year.textContent = years;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
});

const menu = document.getElementById("menu");
const elements = document.querySelectorAll("#elements-header2");

let timer;
menu.addEventListener("click", function () {
  clearTimeout(timer);
  for (i = 0; i < elements.length; i += 1) {
    if (elements[i].style.visibility == "hidden") {
      elements[i].style.visibility = "visible";
      elements[i].style.opacity = 1;
    } else {
      elements[i].style.opacity = 0;
      elements[i].style.visibility = "hidden";
    }
  }
  timer = setTimeout(function () {
    for (i = 0; i < elements.length; i += 1) {
      elements[i].style.visibility = "hidden";
      elements[i].style.opacity = 0;
    }
  }, 4000);
});
