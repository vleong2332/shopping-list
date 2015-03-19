$(document).ready( function() {
	console.log("Doc is ready");

	// RESET ADD_ITEM INPUT
	$('.left_icon .flaticon-delete101').click( function() {
		$('#add_item').val('');
		$('#add_item').focus();
	});

	// CHECKING-UNCHECKING ITEM
	$('#item_list').on('click', '.left_icon > i', function() {
		$(this).toggleClass("flaticon-pencil122");
	 	$(this).toggleClass("flaticon-eraser2");
	 	$(this).parent().parent().toggleClass("checked");
	});

	// REMOVE A SINGLE ITEM PERMANENTLY
	$('#item_list').on('click', '.flaticon-recycling10', function() {
		$(this).parent().parent().remove();
	});

	// RESET THE WHOLE LIST
	$('#reset_list').click( function() {
		if(confirm("This will remove everything on the list"))
			$('#item_list > li').remove();
	});
});

// ADDING TO THE LIST
$.fn.addNewItem = function() {
	var input = '#add_item';
	if (($(input).val() !== "") && ($(input).val() !== "Add item . . ."))
	{
		var new_item = "<li>" +
						"<div class=\"left_icon\"><i class=\"flaticon-pencil122\"></i></div>" +
						"<p>" +	$(input).val() + "</p>" +
						"<div class=\"right_icon\"><i class=\"flaticon-recycling10\"></i></div>" +
						"<div style=\"clear: both\"></div>" +
						"</li>";
		$('#item_list').prepend(new_item);
		$(input).val("").focus();
	}
	console.log("addNewItem triggered, but missed if conditions");
	return;
};