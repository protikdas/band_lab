$(document).ready(function() {
	$('button').click(function() {
		var comment = $('.commentBox').val();
		$('<li>').text(comment).prependTo('.comment-list');
		$('.commentBox').val('');
    });
});