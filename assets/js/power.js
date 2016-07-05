/*====================================
=            FUNCTIONS            =
====================================*/
var siteFunctions = {
	countDown : function(){
	    // Get the element to append to
	    var counter = $('.countdown');
	    // Set the targetDate
	    var targetDate = new Date("September 17, 2016 14:30:00");

	    var remainingSeconds = ~ ~((targetDate - new Date()) / 1000);
	    var remainingTime = {
	        "days": remainingSeconds / (60 * 60 * 24),
	        //"hours": (remainingSeconds % (60 * 60 * 24)) / (60 * 60),
	        //"minutes": (remainingSeconds % (60 * 60)) / 60,
	        //"seconds": remainingSeconds % 60
	    };

	    var str = "";
	    for (var i in remainingTime) {
	        str += ~ ~remainingTime[i] + ", ";
	        //str += ~ ~remainingTime[i] + " " + i + ", ";
	    }
	    // Store the result in the element
	    counter.text( " more days" ).prepend( "<span>" + str.substring(0, str.length - 2) + "</span>" );
	}
}


/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
	siteFunctions.countDown();
    $('.pagination .active a').click(function() {
        return false;
    });
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {

});