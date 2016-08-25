var counter = 0, 
    $items = $('.diy-slideshow figure'),
    numItems = $items.length; 

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);//  actual index of the element to show  
   
  $items.removeClass('show');
  $items.eq(itemToShow).addClass('show');    
};

// add click events to prev & next buttons 
$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});

// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
if('ontouchstart' in window){
  $('.diy-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}


$(document).ready(function(){
    $("#flip_1").click(function(){
        $("#firstpanel_1").slideToggle("slow");
		$("#secondpanel_1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip_2").click(function(){
        $("#firstpanel_2").slideToggle("slow");
		$("#secondpanel_2").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip_3").click(function(){
        $("#firstpanel_3").slideToggle("slow");
		$("#secondpanel_3").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip_4").click(function(){
        $("#firstpanel_4").slideToggle("slow");
		$("#secondpanel_4").slideToggle("slow");
    })
});




$(document).ready(function() {
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
 
    $('.nav').addClass('sticky');

};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});


//navigation bar animation

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
	  
//progressbar loading
	
$(window).scroll(function(){
  var windowScrollTop = $(this).scrollTop();
  
  
if((windowScrollTop>100) || (windowScrollTop<200)){
    
	$("#ht").animate({width: '90%', opacity: '0.8'}, 3000);
	$("#css").animate({width: '80%', opacity: '0.8'}, 3000);
	$("#ph").animate({width: '70%', opacity: '0.8'}, 3000);
	$("#jq").animate({width: '60%', opacity: '0.8'}, 3000);
	$("#js").animate({width: '50%', opacity: '0.8'}, 3000);	
  }
  

});

