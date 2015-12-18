
 $('.button').click(function(){
 $('.button').hide();
 newshape();
 });
 

 $(window).keypress( function(event){
    var keycode = event.keyCode;
    $('.shape'+keycode).show();
    $('.shape'+keycode).hide();
});

function newshape(){
    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
    var key = Math.floor(Math.random() * (48 - 57+1 )) + 57;
    var no = String.fromCharCode(key);
    var top = Math.floor(Math.random() * ($(window).height() - 100)) + "px";
    var left = Math.floor(Math.random() * ($(window).width() - 100)) + "px";
    var newSize = Math.floor(Math.random()*100);
    $('body').append('<div class="shape shape'+ key + '" style="left: '+ left +'; top:'+top+'; width:'+newSize+'; height:'+ newSize+'; border-radius:'+newSize+'; background-color:'+ color +'">'+ no +'</div>');
    setTimeout(newshape, 900);
}

