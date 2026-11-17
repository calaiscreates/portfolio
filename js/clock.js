// js/clock.js — shows the current Auckland time in the status tile.
// The page works without this file; the time is a small extra (progressive enhancement).

const timeElement = document.querySelector("#auckland-time");

// Build the formatter once, reuse it every tick
const formatter = new Intl.DateTimeFormat("en-NZ", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Pacific/Auckland",
});

function updateClock() {
  timeElement.textContent = formatter.format(new Date());
}

if (timeElement) {
  updateClock();
  setInterval(updateClock, 30 * 1000); // refresh every 30 seconds
}
