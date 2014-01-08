function scoreCheck(answer, randomNumber) {
		var guessDiff = Math.abs(answer - randomNumber);
		if (answer == randomNumber) {
			$('.background').addClass("dasIt");
			alert("Das it!");
		}
		else if (guessDiff > 0 && guessDiff <= 10) {
			$('.background').addClass("reallyClose");
			alert("Really close!");
		}
		else if (guessDiff > 10 && guessDiff <= 30) {
			$('.background').addClass("warmish");
			alert("Warmish");
		}
		else if (guessDiff > 30 && guessDiff <= 60) {
			$('.background').addClass("cold");
			alert("Cold");
		}
		else {
			$('.background').addClass("realOff");
			alert("Really really off");
		}
	};

$(document).ready(function() {
	var randomNumber = Math.ceil(Math.random() * 100); // Generates a random number between 1 and 100
	var attempts = 0;
	var answers = [];
	$('#submit').on('click', function(e) {
		e.preventDefault();
		console.log(randomNumber);
		var answer = parseInt($('#input').val());
		if (answers.indexOf(answer) == -1 && typeof answer == 'number' && answer <= 100 && answer > 0) {
			$('.background').removeClass("dasIt reallyClose warmish cold");
			answers.push(answer);
			$('#guessArray').text("Previous attempts: " + answers);
			attempts++;
			$('#input').val("");
			console.log(answer + " " + attempts);
			scoreCheck(answer, randomNumber);
		}
		else if (answer == NaN) {
			alert("Please enter an integer");
		}
		else if (answer > 100 || answer < 0) {
			alert("Please enter a number between 1 and 100!");
		}
		else {
			alert("That number was already entered!  Try again.");
		}

	});
	$('#clear').on('click', function(e) {
		e.preventDefault();
		$('#input').val("");
	});
});