
var red = false;
var black = false;
var yellow = false;
var orange = false;
var blue = false;
var green = false;
var gray = false;
var lime = false;
var purple = false;


// selection one
$('.blue').hide();
$('.green').hide();
$('.orange').hide();
 $('.purple').hide();
$('.lime').hide();
$('.gray').hide();
$('.text2').hide();
$('.text3').hide();




//function for locations

function locationgarden(){
    console.log("working");
    $('body').css('background-image', 'url("garden.jpg")');
}

function locationboat(){
    console.log("working");
    $('body').css('background-image', 'url("boat.jpg")');
}

function locationhouse(){
    console.log("working");
    $('body').css('background-image', 'url("warehouse.jpg")');
}

//function for entertainment
function clown(){
    console.log("gif");
    
    $('body').append("<div class='clown'></div>")
    $('.clown').slideDown( 4000).delay(3400).fadeOut(3000 );
}

function piano(){
    console.log("gif");
  $('body').append("<div class='piano'></div>")
   $('.piano').slideDown( 2000).delay(1400).fadeOut(1000 );
}

function dance(){
    console.log("gif");
   $('body').append("<div class='dance'></div>")
    $('.dance').slideDown( 2000).delay(1400).fadeOut(1000 );
}

//function for food

function foodsushi(){
    console.log("sushi");
    $('body').append("<div class='sushi1'></div>");
    $( ".sushi1" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
   $('body').append("<div class='sushi2'></div>");
    $( ".sushi2" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
    $('body').append("<div class='sushi3'></div>");
    $( ".sushi3" ).fadeIn( 1000 ).delay(1000 ).fadeOut( 700 );
      $('body').append("<div class='sushi4'></div>");
    $( ".sushi4" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
}

function foodice(){
    console.log("ice");
    $('body').append("<div class='ice1'></div>");
    $( ".ice1" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
   $('body').append("<div class='icei2'></div>");
    $( ".ice2" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
    $('body').append("<div class='ice3'></div>");
    $( ".ice3" ).fadeIn( 1000 ).delay(1000 ).fadeOut( 700 );
      $('body').append("<div class='ice4'></div>");
    $( ".ice4" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
}

function foodcake(){
    console.log("cake");
    $('body').append("<div class='cake1'></div>");
    $( ".cake1" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
   $('body').append("<div class='cake2'></div>");
    $( ".cake2" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
    $('body').append("<div class='cake3'></div>");
    $( ".cake3" ).fadeIn( 1000 ).delay(1000 ).fadeOut( 700 );
      $('body').append("<div class='cake4'></div>");
    $( ".cake4" ).fadeIn( 1000 ).delay( 1000 ).fadeOut( 700 );
}

//

//check conditions

function checkWin() {
    //red
    if (red && green && lime) { 
       locationgarden();
       foodsushi();
       piano();
        console.log("red green lime aqua");
    }
  
    else if (red && green && gray) {
        locationgarden();
        foodice();
        piano();
        console.log("red green gray aqua");
    }
   
     else if (red && green && purple) {
         locationgarden();
         foodcake();
         piano();
        console.log("red green purple aqua");
    }
   
        else if (red && blue && lime) {
            locationgarden();
             foodsushi();
             clown();
        console.log("red blue lime aqua");
    }
   
    else if (red && blue && gray) {
        locationgarden();
        foodice();
        clown();
        console.log("red blue gray aqua");
    }
  
     else if (red && blue && purple) {
         locationgarden();
         foodcake();
         clown();
        console.log("red blue purple aqua");
    }
   
        else if (red && orange && lime) {
            locationgarden();
             foodsushi();
             dance();
        console.log("red orange lime aqua");
    }
   
    else if (red && orange && gray) {
        locationgarden();
        foodice();
        dance();
        console.log("red orange gray aqua");
    }
   
     else if (red && orange && purple) {
         locationgarden();
         foodcake();
         dance();
        console.log("red orange purple aqua");
    }
   
    //black
    
     if (black && green && lime) { 
         locationboat();
         foodsushi();
         piano();
        console.log("black green lime aqua");
    }
    
    else if (black && green && gray) {
        locationboat();
        foodice();
        piano();
        console.log("black green gray aqua");
    }
   
     else if (black && green && purple) {
         locationboat();
         foodcake();
         piano();
        console.log("black green purple aqua");
    }
   
        else if (black && blue && lime) {
            locationboat();
            foodsushi();
            clown();
        console.log("black blue lime aqua");
    }
    
    else if (black && blue && gray) {
        locationboat();
        foodice();
        clown();
        console.log("black blue gray aqua");
    }
   
     else if (black && blue && purple) {
         locationboat();
         foodcake();
         clown();
        console.log("black blue purple aqua");
    }
   
        else if (black && orange && lime) {
            locationboat();
            foodsushi();
            dance();
        console.log("black orange lime aqua");
    }
    
    else if (black && orange && gray) {
        locationboat();
        foodice();
        dance();
        console.log("black orange gray aqua");
    }
   
     else if (black && orange && purple) {
         locationboat();
         foodcake();
         dance();
        console.log("black orange purple aqua");
    }
    
    //yellow
     if (yellow && green && lime) { 
         locationhouse();
         foodsushi();
         piano();
        console.log("yellow green lime aqua");
    }
    else if (yellow && green && gray) {
        locationhouse();
        foodice();
        piano();
        console.log("yellow green gray aqua");
    }
    
     else if (yellow && green && purple) {
         locationhouse();
         foodcake();
         piano();
        console.log("yellow green purple aqua");
    }
   
        else if (yellow && blue && lime) {
            locationhouse();
            foodsushi();
            clown();
        console.log("yellow blue lime aqua");
    }

    else if (yellow && blue && gray) {
        locationhouse();
        foodice();
        clown();
        console.log("yellow blue gray aqua");
    }
   
     else if (yellow && blue && purple) {
         locationhouse();
         foodcake();
         clown();
        console.log("yellow blue purple aqua");
    }
   
        else if (yellow && orange && lime) {
            locationhouse();
            foodsushi();
            dance();
        console.log("yellow orange lime aqua");
    }
   
    else if (yellow && orange && gray) {
        locationhouse();
        foodice();
        dance();
        console.log("yellow orange gray aqua");
    }
   
     else if (yellow && orange && purple) {
         locationhouse();
         foodcake();
         dance();
        console.log("yellow orange purple aqua");
    }
}

//

$('.red').click(function(){
 red = true;
 checkWin();
  $('.text1').hide();
    $('.text2').show();
 $('.red').hide();
 $('.black').hide();
 $('.yellow').hide();
 $('.blue').show();
$('.green').show();
$('.orange').show();
 });
 
 $('.black').click(function(){
 black = true;
 checkWin();
   $('.text1').hide();
    $('.text2').show();
 $('.red').hide();
 $('.black').hide();
 $('.yellow').hide();
  $('.blue').show();
$('.green').show();
$('.orange').show();
 });
 
 $('.yellow').click(function(){
 yellow = true;
 checkWin();
   $('.text1').hide();
    $('.text2').show();
 $('.red').hide();
 $('.black').hide();
 $('.yellow').hide();
  $('.blue').show();
$('.green').show();
$('.orange').show();
 });
 
 // seection 2
 
 $('.green').click(function(){
 green = true;
 checkWin();
   $('.text2').hide();
    $('.text3').show();
 $('.green').hide();
 $('.orange').hide();
 $('.blue').hide();
 $('.purple').show();
$('.lime').show();
$('.gray').show();
 });
 
 $('.blue').click(function(){
 blue = true;
 checkWin();
   $('.text2').hide();
    $('.text3').show();
$('.green').hide();
 $('.orange').hide();
 $('.blue').hide();
 $('.purple').show();
$('.lime').show();
$('.gray').show();
 });
 
 $('.orange').click(function(){
 orange = true;
 checkWin();
   $('.text2').hide();
    $('.text3').show();
$('.green').hide();
 $('.orange').hide();
 $('.blue').hide();
 $('.purple').show();
$('.lime').show();
$('.gray').show();
 });
 
//selection3

 $('.purple').click(function(){
 purple = true;
 checkWin();
   $('.text3').hide();
 $('.purple').hide();
 $('.lime').hide();
 $('.gray').hide();
 });
 
 $('.lime').click(function(){
 lime = true;
 checkWin();
    $('.text3').hide();
 $('.purple').hide();
 $('.lime').hide();
 $('.gray').hide();
 });
 
 $('.gray').click(function(){
 gray = true;
 checkWin();
    $('.text3').hide();
 $('.purple').hide();
 $('.lime').hide();
 $('.gray').hide();
 });


 
 