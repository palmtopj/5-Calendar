  $(function () {
    $(".saveBtn").on("click", function () {
      var timeBlock = $(this).closest(".time-block").attr("id");
      var userText = $(this).siblings("textarea.description").val();
      localStorage.setItem(timeBlock, userText);
    });
  
    // Applied the past, present, or future class to each time

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

  // Get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userText = localStorage.getItem(timeBlockId);
    $(this).find("textarea").val(userText);
  });

  // Display the date
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);

  // Display the time
  var currentTime = dayjs().format('h:mm A');
  $('#currentDay').append(' / '+currentTime);
  
});



