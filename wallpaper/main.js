const monthNames = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
];

const weekNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

setInterval(() => {
  let now = new Date()
  let clock = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    day: now.getDate(),
    week: (now.getDay() + 6) % 7,
    month: now.getMonth(),
    year: now.getFullYear()
  }

  showClock(clock);
}, 1000);



function showClock(clock){ 
  const clockText = document.getElementById('clock-container');

  return clockText.innerHTML = `
          <span class="container" style = "color: orange;">let</span> clock = {
            <span>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">hours</span>: <span style="color:cyan;">${clock.hour}</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">minute</span>: <span style="color:cyan;">${clock.minute}</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">second</span>: <span style="color:cyan;">${clock.second}</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">day</span>: <span style="color:cyan;">${clock.day}</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">week</span>: <span style="color:lightgreen;">"${weekNames[clock.week]}"</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">month</span>: <span style="color:lightgreen;">"${monthNames[clock.month]}"</span>, <br>
              &nbsp&nbsp&nbsp&nbsp<span style="color: pink;">year</span>: <span style="color:cyan;">${clock.year}</span> <br>
            </span>
          };
  `
}