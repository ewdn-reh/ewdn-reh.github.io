
// When WET is ready
$( document ).on( "wb-ready.wb", function( event ) {
    

	// add Github icons to the footer
	$( "#wb-info .landscape a" ).prepend( "<i class='fab fa-3x fa-github mrgn-rght-md' aria-hidden='true'></i>" );

	// remove the contact footer links
	$(".ftr-urlt-lnk").addClass("hidden");

	// align Canada FIP to the right
	$(".col-xs-6.col-md-3.col-lg-2.text-right").removeClass("col-xs-6 col-md-3 col-lg-2");

});