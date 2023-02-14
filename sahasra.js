$(document).on("click", ".card", function () {
  if ($(this).parent().attr("id") == "all-cards") {
    $(this).appendTo($("#my-cards"));
  } else {
    $(this).appendTo($("#all-cards"));
  }
});
