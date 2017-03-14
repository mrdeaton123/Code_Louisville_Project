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
    $("#hide").click(function(){  /* on click spoiler is hidden */
      $(".spoiler").hide();
    });
    $("#show").click(function(){ /* on click spoiler is shown */
      $(".spoiler").show();
    });
  });


	$('.lightbox_trigger').click(function(e) {  /* on click of elements labeled lightbox_trigger perform the following function */
		e.preventDefault(); /* prevent default action */
		var image_href = $(this).attr("href"); /* get image from reference */
		if ($('#lightbox').length > 0) { /* checks to see if lightbox window exists already. If not, creates one. */
			$('#content').html('<img src="' + image_href + '" />'); /* stick href image into source img location */
			$('#lightbox').show('fast'); /* how lightbox window with transition */
		}
		else {
			var lightbox = /* Creates new div for lightbox */
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + /* inserts clicked link's href into img src */
					'<img src="' + image_href +'" />' +
				'</div>' +
			'</div>';
			$('body').append(lightbox); /* Adds lightbox div to target location (body) */
		}
	});

	$('body').on('click', '#lightbox', function() { /* Closes lightbox when clicking anywhere on screen */
		$('#lightbox').hide();
	});
