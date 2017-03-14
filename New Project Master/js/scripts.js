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

jQuery(document).ready(function($) {

	$('.lightbox_trigger').click(function(e) {

		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = $(this).attr("href");

		/*
		If the lightbox window HTML already exists in document,
		change the img src to to match the href of whatever link was clicked

		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

		if ($('#lightbox_overlay').length > 0) { // #lightbox exists

			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox_overlay').show('fast');
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox_overlay">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox_overlay);
		}

	});

	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox_overlay').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox_overlay').hide();
	});

});
