//BEGIN Global variables
var lastShowed = '';
var pesoAçoCarbono = parseFloat(7.85);
var pesoAçoInox = parseFloat(8);
var pi = parseFloat(3.14);
//END Global variables

$(document).ready(function () {
  $('.resultButton').val(parseFloat(0).toFixed(2) + ' kg');
  $('.dimensionButton').val(parseFloat(0).toFixed(2) + ' mm');
  $('.areaButton').val(parseFloat(0).toFixed(2) + ' m²');
  $('.modalWindow').hide();

  $('.toggleMaterial').css('background-color', 'rgb(10, 10, 10)');
  $('.toggleMaterial').css('color', 'rgb(255, 255, 255)');

  $('.modalWindow').css('border', '1px solid rgb(255, 255, 255)');

  $('input').css('background-color', 'rgb(10, 10, 10)');
  $('input').css('color', 'rgb(255, 255, 255)');
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
    $('.toggleMaterial').css('background-color', 'rgb(10, 10, 10)');
    $('.toggleMaterial').css('color', 'rgb(255, 255, 255)');

    $('.modalWindow').css('border', '1px solid rgb(255, 255, 255)');

    $('input').css('background-color', 'rgb(10, 10, 10)');
    $('input').css('color', 'rgb(255, 255, 255)');
  }
  else if ($('.toggleMaterial').css('background-color') == 'rgb(10, 10, 10)') {
    $('.toggleMaterial').css('background-color', 'rgb(255, 255, 255)');
    $('.toggleMaterial').css('color', 'rgb(10, 10, 10)');

    $('.modalWindow').css('border', '1px solid rgb(0, 0, 0)');

    $('input').css('background-color', 'rgb(255, 255, 255)');
    $('input').css('color', 'rgb(0, 0, 0)');
  };
};