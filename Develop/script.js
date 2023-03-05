let container;
let time;
let text;
let button;
let icon;
let mainDiv = document.getElementById("mainDiv");

// display current day on page
let currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMM DD");

// compares current time to time on time block
let currentTime = dayjs().format("HH:00");
console.log(currentTime);
// let hour = Array.from(document.getElementsByClassName("hours"));
// console.log(hour[0].id);

let hour = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

for (i = 0; i < hour.length; i++) {
  if (hour[i] == currentTime) {
    container = document.createElement("div");
    container.setAttribute("class", "row time-block present");
    mainDiv.appendChild(container);

    time = document.createElement("div");
    time.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    time.innerHTML = hour[i];
    container.appendChild(time);

    text = document.createElement("textarea");
    text.setAttribute("class", "col-8 col-md-10 description");
    text.rows = "3";
    container.appendChild(text);

    button = document.createElement("button");
    button.setAttribute("class", "btn saveBtn col-2 col-md-1");
    button.ariaLabel = "save";
    container.appendChild(button);

    icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-save");
    icon.ariaHidden = "true";
    button.appendChild(icon);
  } else if (hour[i] < currentTime) {
    console.log(hour[i]);
    container = document.createElement("div");
    container.setAttribute("class", "row time-block past");
    mainDiv.appendChild(container);

    time = document.createElement("div");
    time.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    time.innerHTML = hour[i];
    container.appendChild(time);

    text = document.createElement("textarea");
    text.setAttribute("class", "col-8 col-md-10 description");
    text.rows = "3";
    container.appendChild(text);

    button = document.createElement("button");
    button.setAttribute("class", "btn saveBtn col-2 col-md-1");
    button.ariaLabel = "save";
    container.appendChild(button);

    icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-save");
    icon.ariaHidden = "true";
    button.appendChild(icon);
  } else if (hour[i] > currentTime) {
    container = document.createElement("div");
    container.setAttribute("class", "row time-block future");
    mainDiv.appendChild(container);

    time = document.createElement("div");
    time.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    time.innerHTML = hour[i];
    container.appendChild(time);

    text = document.createElement("textarea");
    text.setAttribute("class", "col-8 col-md-10 description");
    text.rows = "3";
    container.appendChild(text);

    button = document.createElement("button");
    button.setAttribute("class", "btn saveBtn col-2 col-md-1");
    button.ariaLabel = "save";
    container.appendChild(button);

    icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-save");
    icon.ariaHidden = "true";
    button.appendChild(icon);
  }
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
