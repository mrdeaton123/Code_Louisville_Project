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
