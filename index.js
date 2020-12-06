$('.cat-btn').click(function(){
  $('nav ul .cat-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
$('.bhk-btn').click(function(){
  $('nav ul .bhk-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});
$('.pg-btn').click(function(){
  $('nav ul .pg-show').toggleClass("show2");
  $('nav ul .third').toggleClass("rotate");
});
$('.floor-btn').click(function(){
  $('nav ul .floor-show').toggleClass("show3");
  $('nav ul .fourth').toggleClass("rotate");
});
$('.fur-btn').click(function(){
  $('nav ul .fur-show').toggleClass("show4");
  $('nav ul .fifth').toggleClass("rotate");
});
$('.pro-btn').click(function(){
  $('nav ul .pro-show').toggleClass("show5");
  $('nav ul .sixth').toggleClass("rotate");
});
$('.bal-btn').click(function(){
  $('nav ul .bal-show').toggleClass("show6");
  $('nav ul .seventh').toggleClass("rotate");
});

$('.sup-btn').click(function(){
  $('nav ul .sup-show').toggleClass("show7");
  $('nav ul .eight').toggleClass("rotate");
});

$('.gated-btn').click(function(){
  $('nav ul .gated-show').toggleClass("show8");
  $('nav ul .ninth').toggleClass("rotate");
});

$('.amn-btn').click(function(){
  $('nav ul .amn-show').toggleClass("show9");
  $('nav ul .tenth').toggleClass("rotate");
});

$('.ostay-btn').click(function(){
  $('nav ul .ostay-show').toggleClass("show10");
  $('nav ul .eleven').toggleClass("rotate");
});

$('.meal-btn').click(function(){
  $('nav ul .meal-show').toggleClass("show11");
  $('nav ul .twelve').toggleClass("rotate");
});

$('.ogender-btn').click(function(){
  $('nav ul .ogender-show').toggleClass("show12");
  $('nav ul .thirteen').toggleClass("rotate");
});



$('nav ul li').click(function(){
  $(this).addCLass("active").siblings().removeClass("active");
});

// tootip
$(document).ready(function() {
  $('[data-toggle=tooltip]').tooltip();
});