var lastShowed = "";

$(document).ready(function () {
  $(".resultButton").val(parseFloat(0).toFixed(2) + " KG");
  $(".modalWindow").hide();
});

function ShowHide(modal) {
  $("#apresentation").hide();
  if (lastShowed != "") $(`#${lastShowed}`).hide();
  lastShowed = modal;
  $(`#${modal}`).fadeIn(500);
}