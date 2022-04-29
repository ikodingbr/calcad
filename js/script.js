//Global variables
var lastShowed = '';
var pesoAço = parseFloat(7.85);
var pi = parseFloat(3.14);

$(document).ready(function () {
  $('.resultButton').val(parseFloat(0).toFixed(2) + ' KG');
  $('.modalWindow').hide();
});

function ShowHide(modal) {
  $('#apresentation').hide();
  $('footer').hide();
  $('.modalWindow').hide();

  $(`#${modal}`).show(500);
  $('footer').show(500);
};

function refresh() {
  $('.modalWindow').hide();
  $('#apresentation').fadeIn(1000);
  $('footer').fadeIn(1000);
};

function toggleDarkMode() {
  if ($('.toggleMaterial').css('background-color') == 'rgb(255, 255, 255)') {
    $('.toggleMaterial').css('background-color', 'rgb(46, 46, 46)');
    $('.toggleMaterial').css('color', 'rgb(255, 255, 255)');

    $('.modalWindow').css('border', '1px solid rgb(255, 255, 255)');
  }
  else if ($('.toggleMaterial').css('background-color') == 'rgb(46, 46, 46)') {
    $('.toggleMaterial').css('background-color', 'rgb(255, 255, 255)');
    $('.toggleMaterial').css('color', 'rgb(46, 46, 46)');

    $('.modalWindow').css('border', '1px solid rgb(0, 0, 0)');
  };
};