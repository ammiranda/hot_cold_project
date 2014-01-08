function scoreCheck(answer, randomNumber) {  // Function that checks how close the user is to guessing the correct number
		var guessDiff = Math.abs(answer - randomNumber);
		$('#infoHeader').empty();
		if (answer == randomNumber) {
			$('.background').addClass("dasIt");
			return "Das it!";
		}
		else if (guessDiff > 0 && guessDiff <= 10) {
			$('.background').addClass("reallyClose");
			return "Really close!";
		}
		else if (guessDiff > 10 && guessDiff <= 30) {
			$('.background').addClass("warmish");
			return "Warmish";
		}
		else if (guessDiff > 30 && guessDiff <= 60) {
			$('.background').addClass("cold");
			return "Cold";
		}
		else {
			$('.background').addClass("realOff");
			return "Really really off";
		}
	};

$(document).ready(function() {
	var randomNumber = Math.ceil(Math.random() * 100); // Generates a random number between 0 and 100
	var attempts = 0;
	var answers = [];
	$('#submit').on('click', function(e) {
		e.preventDefault();
		console.log(randomNumber);
		var answer = parseInt($('#input').val());
		if (answers.indexOf(answer) == -1 && typeof answer == 'number' && answer <= 100 && answer >= 0) {
			$('.background').removeClass("dasIt reallyClose warmish cold");
			answers.push(answer);
			$('#guessArray').text("Previous attempts: " + answers);
			attempts++;
			$('#input').val("");
			console.log(answer + " " + attempts);
			$('#infoHeader').text(scoreCheck(answer, randomNumber));
		}
		else if (answer == NaN) {
			alert("Please enter an integer");
		}
		else if (answer > 100 || answer < 0) {
			alert("Please enter a number between 0 and 100!");
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