// alert('hello');

$(document).ready(function(event){
    
  //If user clicks on a link, page does not reload
  $("a").click(function(event){
    event.preventDefault();
  });
  
  //when user clicks Marvin Gaye button, facts slideDown

  $('#MG').click(function(){
    $('.facts').toggle();
  });

  //when user clicks track 1 button, lyrics appear, read less shows
  //when user clicks hide, lyrics and audio hide


  $('.button1').click(function() {
    $('.precious-box').slideDown();
    $('p.precious-lyrics').show();
    $('p.readless').show();
    $('p.writers1').show();
    $('#Precious').show();
    $('.button1').css('font-style', 'italic');
  });
  $('p.readless').click(function(){
    $('.precious-box').slideUp();
    $('p.readless').hide();
    
  });

  $('.button2').click(function() {
    $('.grapevine-box').slideDown();
    $('p.grapevine-lyrics').show();
    $('p.readless2').show();
    $('#Grapevine').show();
    $('p.writers2').show();
    $('.button2').css('font-style', 'italic');
    
  });
  $('p.readless2').click(function(){
    $('.grapevine-box').slideUp();
    $('p.readless2').hide();
    
  });

  $('.button3').click(function() {
    $('.wgo-box').slideDown();
    $('p.whats-going-on').show();
    $('p.readless3').show();
    $('#WGO').show();
    $('p.writers3').show();
    $('.button3').css('font-style', 'italic');
    
  });
  $('p.readless3').click(function(){
    $('.wgo-box').slideUp();
    $('p.readless3').hide();
   
  });

  $('.button4').click(function() {
    $('.mercy-box').slideDown();
    $('p.mercy-lyrics').show();
    $('p.readless4').show();
    $('#Mercy').show();
    $('p.writers4').show();
    $('.button4').css('font-style', 'italic');
  });
  $('p.readless4').click(function(){
    $('.mercy-box').slideUp();
    $('p.readless4').hide();
    
  });

  $('.button5').click(function() {
    $('.sexual-healing-box').slideDown();
    $('p.sexual-healing').show();
    $('p.readless5').show();
    $('#Healing').show();
    $('p.writers5').show();
    $('.button5').css('font-style', 'italic');
  });
  $('p.readless5').click(function(){
    $('.sexual-healing-box').slideUp();
    $('p.readless5').hide();
    
  }); 

//when user clicks play button, record spins
//when user clicks pause, record stops

  $("#Precious").on("play", function(){
    console.log("playing");
    $("#turntable").addClass('started');
  });
  $("#Precious").on("pause",function(){
    $("#turntable").removeClass('started');
  });

 $("#Grapevine").on("play", function(){
    $("#turntable").addClass('started');
  });
  $("#Grapevine").on("pause", function(){
    $("#turntable").removeClass('started');
  });

 $("#WGO").on("play", function(){
    $("#turntable").addClass('started');
  });
  $("#WGO").on("pause", function(){
    $("#turntable").removeClass('started');
  });


 $("#Mercy").on("play", function(){
    $("#turntable").addClass('started');
  });
  $("#Mercy").on("pause", function(){
    $("#turntable").removeClass('started');
  });


 $("#Healing").on("play", function(){
    $("#turntable").addClass('started');
  });
  $("#Healing").on("pause", function(){
    $("#turntable").removeClass('started');
  });

});
