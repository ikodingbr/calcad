//Global variables
var lastShowed = "";
var pesoAço = parseFloat(7.85);
var pi = parseFloat(3.14);

$(document).ready(function () {
  $(".resultButton").val(parseFloat(0).toFixed(2) + " KG");
  $(".modalWindow").hide();
});

function ShowHide(modal) {
  $("#apresentation").hide();
  $("footer").hide();
  $(".modalWindow").hide();

  $(`#${modal}`).show(500);
  $("footer").show(500);
};