$(document).ready( function() {
	console.log("Doc is ready");

	// CHECKING-UNCHECKING ITEM
	$('#item_list').on('click', '.left_icon > i', function() {
		$(this).toggleClass("flaticon-pencil122");
	 	$(this).toggleClass("flaticon-eraser2");
	 	$(this).parent().parent().toggleClass("checked");
	});
});