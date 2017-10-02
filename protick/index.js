$(document).ready(function() {
	$('button').click(function() {
		var comment = $('.commentBox').val();
		$('<li>').text(comment).prependTo('.comment-list');
		$('.commentBox').val('');
		});
		
	$("img.img-band").mouseenter(function(){
			$(this).addClass("change").delay(5000).queue(function(){
				$(this).removeClass("change").dequeue();
			});
			
	});
});

