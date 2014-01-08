function scoreCheck(answer, randomNumber) {  			// Function that checks how close the user is to guessing the correct number
		var guessDiff = Math.abs(answer - randomNumber);
		$('#titleHeader').empty();  					// Removes the previous text from the titleHeader
		$('.infoHeader').css('color', 'white'); 	 	// Changes the text color of the infoHeader to white
		if (answer == randomNumber) {  				 	// Victory condition
			$('.background').addClass("dasIt");
			return "Das it!";
		}
		else if (guessDiff > 0 && guessDiff <= 5) {  	// Guess is within five numbers of the correct response
			$('.background').addClass("reallyClose");
			return "Really close!";
		}
		else if (guessDiff > 5 && guessDiff <= 30) { 	// Guess is within thirty but more than five away
			$('.background').addClass("warmish");
			return "Warmish";
		}
		else if (guessDiff > 30 && guessDiff <= 60) { 	// Guess is within sixty but more than thirty away
			$('.background').addClass("cold");
			return "Cold";
		}
		else {										  	// Guess is more than sixty numbers off
			$('.background').addClass("realOff");
			return "Really really off";
		}
	};

$(document).ready(function() {
	var randomNumber = Math.ceil(Math.random() * 100);  // Generates a random number between 0 and 100
	var attempts = 0;
	var answers = [];
	$('#submit').on('click', function(e) {

		e.preventDefault();  							// Prevents default form submission behavior

		var answer = parseInt($('#input').val()); 		// Stores inputted answer as an integer

		if (answers.indexOf(answer) == -1 && typeof answer == 'number' && answer <= 100 && answer >= 0) {
			$('.background').removeClass("dasIt reallyClose warmish cold realOff");  // Resets color classes
			answers.push(answer);  						// Adds inputted answer to answers array
			$('#guessArray').text("Previous attempts: " + answers);  // Writes in the answers array to the guessArray paragraph
			attempts++;  								// Increments the attempts variable
			$('#input').val("");  						// Clears the input field
			$('#titleHeader').text(scoreCheck(answer, randomNumber));  // Inputs the text returned from the scoreCheck function to the header
		}
		else if (answer == NaN) {  						// Checks if inputted answer is not a number
			alert("Please enter an integer");
		}
		else if (answer > 100 || answer < 0) {  		// Checks if answer is within range
			alert("Please enter a number between 0 and 100!");
		}
		else {  										// Informs the user that the number they entered was already used
			alert("That number was already entered!  Try again.");
		}

	});
	$('#clear').on('click', function(e) {				// Clear button will empty the input field when clicked
		e.preventDefault();
		$('#input').val("");
	});
});