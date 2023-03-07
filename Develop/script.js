let container;
let time;
let text;
let button;
let icon;
// let saveButton = document.getElementsByTagName("button");
let saveButton = $("button");
let mainDiv = $("#mainDiv");
// display current day on page
let currentDay = $("#currentDay");
currentDay.text(dayjs().format("dddd, MMM DD"));

// sets current time as 24 hour time
let currentTime = dayjs().format("HH:00");

// array of work day hours
let hour = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "20:00",
];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // compares current time to hour array and sets HTML accordingly
  for (i = 0; i < hour.length; i++) {
    container = $("<div>");
    container.attr("id", hour[i]);
    mainDiv.append(container);

    time = $("<div>");
    time.addClass("col-2 col-md-1 hour text-center py-3");
    time.text(hour[i]);
    container.append(time);

    text = $("<textarea>");
    text.addClass("col-8 col-md-10 description");
    text.rows = "3";
    container.append(text);

    button = $("<button>");
    button.addClass("btn saveBtn col-2 col-md-1");
    button.ariaLabel = "save";
    container.append(button);

    icon = $("<i>");
    icon.addClass("fas fa-save");
    icon.ariaHidden = "true";
    button.append(icon);

    if (hour[i] == currentTime) {
      container.addClass("row time-block present");
    } else if (hour[i] < currentTime) {
      container.addClass("row time-block past");
    } else if (hour[i] > currentTime) {
      container.addClass("row time-block future");
    }
  }

  $("button").click(function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings("textarea").val()
    );
  });
});
