$('.navbar-toggler').on('transitionstart', function () {
	$(this).prop('disabled', true);
});
$('.navbar-toggler').on('transitionend', function () {
	$(this).prop('disabled', false);
});
$('.navbar-toggler').click(function () {
	$('.rotate').toggleClass('down');
	$('.rotate').toggleClass('up');
});
