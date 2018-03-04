$(document).ready(function() {
	/* Accordion */
	$('.expand').each(function() {
		$(this).children().last().css({'margin-bottom': '0', 'padding-bottom': '0'});
	});

	$('.expand-heading').click(function() {
		$(this).toggleClass('clicked');
		$(this).next('.expand').slideToggle('fast');
	});
});

	//Cross the menu burger icon
	function cross(x) {
		x.classList.toggle('change');
		$('.main-menu').slideToggle();
		$('.main').toggleClass('dark');
		$('#about-icons').slideToggle();
	};
