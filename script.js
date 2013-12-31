$(document).ready(function() {
	var randomNumber = Math.ceil(Math.random() * 100); // Generates a random number between 1 and 100
	var attempts = 0;
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var answer = $('#input').val();
		attempts++;
		$('#input').val("");
		console.log(answer + " " + attempts);
	});
});