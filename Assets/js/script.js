//Displays current day and hour at the top of the calendar
$('#currentDay').text(dayjs().format('dddd, MMMM DD YYYY'));
$('#currentHour').text("Current hour: " + dayjs().format('hh:mm a'));



$(function () {
  var currentTime = dayjs().format('HH'); //saves the current hour of the day inside a variable
  var saveBtn = $(".saveBtn") //select all elements on the page with the class "saveBtn" and assigns them to a variable called "saveBtn".

  //By clicking on the save button this event will assign blocktime value into the key in local storage and will save users text input into the key value.
  saveBtn.on("click", function () {
    var blockTime = $(this).parent().attr("id");
    var savedText = $(this).siblings("textarea").val();
    localStorage.setItem(blockTime, savedText)
  })


  //this function will loop every .time-block and will check if the currentTime matches or not with the blockTime values. It will add class values (past, present, future) and will change its style property accordingly.
  $(".time-block").each(function () {
    var blockTime = $(this).attr("id");

    if (currentTime == blockTime) {
      $(this).removeClass("past")
      $(this).addClass("present")
      $(this).removeClass("future")
      $(this).children().eq(1).text("You should be doing this right now")

    } else if (currentTime > blockTime) {
      $(this).addClass("past")
      $(this).removeClass("present")
      $(this).removeClass("future")

    } else if (currentTime < blockTime) {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")

    }


    //Get item from local storage if any
    //Example: selects the element with the ID "10" and within that element, it selects all elements with the class "description". Then it sets the value of those selected elements to the value stored in local storage with the key "10".
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

  })

});




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
