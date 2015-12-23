$('.container2').hide();
$('.container3').hide();
$('.location').hide();
$('.entertainment').hide();
$('.food').hide();
var click = 1
//container1
var red = false
var yellow = false
var lavender = false
var blue = false
var lime = false
var purple = false
var orange = false
var pink = false
var green = false
var brown = false
var aqua = false
var gray = false
var magenta = false
var teal = false
var bisque = false
//container2
var circle = false
var moon = false
var square = false
var pentagon = false
var triangledown = false
var triangleleft = false
var triangleright = false
var triangleup = false
var roundsquare = false
var oval = false
var parallelogram = false
var trapezoid = false
var cone = false
var halfcircle = false
var diamond = false
//container3
var polka = false
var stripe = false
var check = false
var wave = false
var triangular = false
var maze = false
var line = false
var zigzag = false
var leaf = false
var hound = false
var brick = false
var swirl = false
var diamondy = false
var abstract = false
var plaid = false

//function square2(){
  //   var top = Math.floor(Math.random() * ($(window).height() - 100)) + "px";
  //  var left = Math.floor(Math.random() * ($(window).width() - 100)) + "px";
  //  $('body').append('<div class="food food'+ '" style="left: '+ left +'; top:'+top+';background:'+ 'url(square2.jpg)' +'">' +'</div>');
  //  setTimeout(square2, 900);
//}

function checkWin(){
   //container1
    if (click == "3" && red == true){
     $('.location').css('background','url("red.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
   else  if (click == "3" && yellow == true){
     $('.location').css('background','url("yellow.jpg")');
   $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
     else if (click == "3" && lavender == true){
     $('.location').css('background','url("lavender.jpg")');
   $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && blue == true){
     $('.location').css('background','url("blue.jpg")');
  $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && lime == true){
     $('.location').css('background','url("lime.jpg")');
    $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && purple == true){
     $('.location').css('background','url("purple.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && gray == true){
     $('.location').css('background','url("gray.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
   else   if (click == "3" && orange == true){
     $('.location').css('background','url("orange.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && pink == true){
     $('.location').css('background','url("pink.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
   else   if (click == "3" && green == true){
     $('.location').css('background','url("green.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && brown == true){
     $('.location').css('background','url("brown.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && aqua == true){
     $('.location').css('background','url("aqua.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
   else   if (click == "3" && magenta == true){
     $('.location').css('background','url("magenta.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
   else   if (click == "3" && teal == true){
     $('.location').css('background','url("teal.jpg")');
     $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    else  if (click == "3" && bisque == true){
     $('.location').css('background','url("bisque.jpg")');
      $('.location' ).fadeIn( 4000 ).delay( 4000 );
    }
    //container 3
    if (click == "3" && polka == true){
     $('.entertainment').css('background','url("polka1.png")');
      $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
   else  if (click == "3" && stripe == true){
     $('.entertainment').css('background','url("stripe1.jpg")');
   $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && check == true){
     $('.entertainment').css('background','url("check1.jpg")');
  $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && wave == true){
     $('.entertainment').css('background','url("wave1.jpg")');
      $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && triangular == true){
     $('.entertainment').css('background','url("triangular1.jpg")');
 $('.entertainment' ).fadeIn( 4000 ).delay( 4000 ) ;
    }
     else  if (click == "3" && line == true){
     $('.entertainment').css('background','url("line1.jpg")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && maze == true){
     $('.entertainment').css('background','url("maze1.jpg")');
    $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && hound == true){
     $('.entertainment').css('background','url("hound1.jpg")');
   $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && zigzag == true){
     $('.entertainment').css('background','url("zigzag1.png")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && leaf == true){
     $('.entertainment').css('background','url("leaf1.jpg")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && brick == true){
     $('.entertainment').css('background','url("brick1.jpg")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && abstract == true){
     $('.entertainment').css('background','url("abstract1.jpg")');
   $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && diamondy == true){
     $('.entertainment').css('background','url("diamondy1.jpg")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
     else  if (click == "3" && swirl == true){
     $('.entertainment').css('background','url("spiral1.jpg")');
    $('.entertainment' ).fadeIn( 4000 ).delay( 4000 ) ;
    }
     else  if (click == "3" && plaid == true){
     $('.entertainment').css('background','url("plaid1.jpg")');
     $('.entertainment' ).fadeIn( 4000 ).delay( 4000 );
    }
    //container2
     if (click == "3" && square == true){
     $('.food').css('background','url("square2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && circle == true){
     $('.food').css('background','url("circle2.png")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && moon == true){
     $('.food').css('background','url("moon2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && triangledown == true){
     $('.food').css('background','url("triangledown2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && triangleup == true){
     $('.food').css('background','url("triangleup2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && triangleright == true){
     $('.food').css('background','url("triangleright2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && triangleleft == true){
     $('.food').css('background','url("triangleleft2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && roundsquare == true){
     $('.food').css('background','url("roundsquare2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && oval == true){
     $('.food').css('background','url("oval2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && pentagon == true){
     $('.food').css('background','url("pentagon2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && circle == true){
     $('.food').css('background','url("circle2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && diamond == true){
     $('.food').css('background','url("diamond2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && halfcircle == true){
     $('.food').css('background','url("halfcircle2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && cone == true){
     $('.food').css('background','url("cone2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && parallelogram == true){
     $('.food').css('background','url("parralellogram2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
    else if (click == "3" && trapezoid == true){
     $('.food').css('background','url("trapezoid2.jpg")');
      $('.food' ).fadeIn( 4000 ).delay( 4000 );
    }
}

// container 1

 $('.red').click(function(){
click = 1;
red = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
 
$('.yellow').click(function(){
click = 1;
yellow = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.lavender').click(function(){
click = 1;
lavender = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.blue').click(function(){
click = 1;
blue = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.lime').click(function(){
click = 1;
lime = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.purple').click(function(){
click = 1;
purple = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.orange').click(function(){
click = 1;
orange = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.pink').click(function(){
click = 1;
pink = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.green').click(function(){
click = 1;
green = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.brown').click(function(){
click = 1;
brown = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.aqua').click(function(){
click = 1;
aqua = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.gray').click(function(){
click = 1;
gray = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.magenta').click(function(){
click = 1;
magenta = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.teal').click(function(){
click = 1;
teal = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  $('.bisque').click(function(){
click = 1;
bisque = true;
checkWin();
    $('.container1').hide();
     $('.container2').show();
  });
  
  //container2
  
 $('.square').click(function(){
click = 2;
square = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.circle').click(function(){
click = 2;
circle = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.moon').click(function(){
click = 2;
moon = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.triangleup').click(function(){
click = 2;
triangleup = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.triangledown').click(function(){
triangledown = true;
click = 2;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.triangleright').click(function(){
click = 2;
triangleright = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.triangleleft').click(function(){
click = 2;
triangleleft = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.diamond').click(function(){
click = 2;
diamond = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.pentagon').click(function(){
click = 2;
pentagon = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.roundsquare').click(function(){
click = 2;
roundsquare = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.oval').click(function(){
click = 2;
oval = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.halfcircle').click(function(){
click = 2;
halfcircle = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.cone').click(function(){
click = 2;
cone = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.trapezoid').click(function(){
click = 2;
trapezoid = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
   $('.parallelogram').click(function(){
click = 2;
parallelogram = true;
checkWin();
    $('.container2').hide();
     $('.container3').show();
  });
  
 //container3
 
    $('.polka').click(function(){
click = 3;
polka = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.stripe').click(function(){
click = 3;
stripe = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.check').click(function(){
click = 3;
check = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.maze').click(function(){
click = 3;
maze = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.line').click(function(){
click = 3;
line = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.wave').click(function(){
wave = true;
click = 3;
checkWin();
     $('.container3').hide();
  });
  
     $('.triangular').click(function(){
click = 3;
triangular = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.zigzag').click(function(){
click = 3;
zigzag = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.leaf').click(function(){
click = 3;
leaf = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.hound').click(function(){
click = 3;
hound = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.brick').click(function(){
click = 3;
brick = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.swirl').click(function(){
click = 3;
swirl = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.diamondy').click(function(){
diamondy = true;
click = 3;
checkWin();
     $('.container3').hide();
  });
  
     $('.plaid').click(function(){
click = 3;
plaid = true;
checkWin();
     $('.container3').hide();
  });
  
     $('.abstract').click(function(){
click = 3;
abstract = true;
checkWin();
     $('.container3').hide();
  });