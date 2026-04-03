$(document).ready(function() {
	$(".toggleButtonWrapper").on("click", function() {
		$(this).toggleClass('active');
		if ($('#aboutMe').is(':visible')) {
			$('#aboutMe').css('display', 'none');
		} else {
			$('#aboutMe').css('display', 'block');
		}

		if ($('.arrow').attr('src') === 'assets/arrow-down-icon.png') {
			$('.arrow').attr('src', 'assets/arrow-up-icon.png');
		} else {
			$('.arrow').attr('src', 'assets/arrow-down-icon.png');
		}
	});
});

