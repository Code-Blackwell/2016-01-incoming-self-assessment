$(document).ready(function(){

	event.preventDefault();
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter');
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	var firstRandomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	//isolate the highscore
	var $highscore = $('.score');
	//attaches the counter to the highscore on page
	$currentCount.append('<h4 class= "counter">' + $highscore.val() +'</h4>');
	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + firstRandomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){
		//create a loop to go through the choices array of the question
		for(var i = 0 ; i < randomQuestion.choices.length ; i++){
			//Letters array to make choices more apparent.
			var letters = ['A.', 'B.', 'C.', 'D.']
			//Display the possible choices in hypertext
			//@todo make the game work when you click on a choice.
			$('.choices').append('<a href="#" class="usersChoice">' + letters[i] + ' ' + randomQuestion.choices[i] + '</a><br><br>');
		}

	};

	//create an Event handler that interacts with usersChoice and displays the answer.
	$('.choices').on('click', '.usersChoice', function(randomQuestion){
		//clear choices
		$('.choices').html('');
		//append the correct answer to the emptied choices tag.
		$('.usersChoice').append('<h5>' + randomQuestion.correct + '</h5>');
	})

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		//event handler
		//clear current html
		//call randomQuestion()??
		//call answerGenerator()

	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		$userInput = $('input:checked');

		if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	answerGenerator(firstRandomQuestion);
});
