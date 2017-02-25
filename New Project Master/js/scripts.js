/* Following code creates an animated pop out navigation menu on the side of the page */

$(function() {
  $('#navigation a').stop().animate({'marginLeft':'-90px'},1000); /* selects all links in the navigation element and moves them left -90px */
  $('#navigation > li').hover(                                    /* selects nativation list items and on hover causes them to move to the right */
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);      /* Pops out the navigation items after a second when page is first loaded */
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-90px'},200);    /* after hover over with mouse resets links to original position -90px off screen */
  }
 );
});

/* Following code creates hide and show functionality for spoilers in the material */
$(document).ready(function(){
  $("#hide").click(function(){
    $(".spoiler").hide();
  });
  $("#show").click(function(){
    $(".spoiler").show();
  });
});

/* Following code creates a light box when images are clicked on in the page */
var $overlay=$('<div id="overlay"></div>'); /* Creates a new variable titled overlay and fills it with a new div with id=overlay */
var $image=$("<img>"); /* Creates a new variable titled image and fills it with a new img tag */
var $caption=$("<p></p>"); /* Creates a new variable titled caption and fills it with a new paragraph */
$overlay.append($image); /* Creates an image to append to the overlay */
$overlay.append($caption); /*Appends the overlay with a caption */
$("body").append($overlay); /* Adds the overlay proper */
$("#imageGallery a").click(function(event) { /*targets the id imageGallery links on click and performs following function */
  event.preventDefault(); /* Prevents the default action */
  var imageLocation=$(this).attr("href"); /* Creates a new variable that targets the imageLocation attribute href */
  $image.attr("src", imageLocation); /* Updates overlay with image linked */
  $overlay.show(); /* Displays the overlay */
  var captionText=$(this).children("img").attr("alt"); /* gets the alt attribute child and changes to caption */
  $caption.text(captionText);
});
$overlay.click(function() {
  $overlay.hide();
});
