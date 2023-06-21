// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  $(function () {
    $(".saveBtn").on("click", function () {
      var timeBlock = $(this).closest(".time-block").attr("id");
      var userText = $(this).siblings("textarea.description").val();
      localStorage.setItem(timeBlock, userText);
    });
  
    // Add code to apply the past, present, or future class to each time

  var currentHour = dayjs().format('H');
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (timeBlockHour == currentHour) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("past present");
    }
  });

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. Use the id attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);
  var currentTime = dayjs().format('h:mm A');
  $('#currentDay').text(currentTime);
  
});
// Display the time


