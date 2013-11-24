$('#controls').on('click', '.stickers', function() {

	// Clone the sticker that was clicked
	var new_sticker = $(this).clone();
	
	// A class so we can position stickers on the
	new_sticker.addClass('stickers_on_card');
	
	// Inject the new image into the canvas
	$('#canvas').prepend(new_sticker);
	
	// Make that puppy draggable
	new_sticker.draggable({containment: '#canvas', opacity:.35});
		
});