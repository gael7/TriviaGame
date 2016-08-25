var trivia={
	triviaQuestions:[
	{	question: "Who does Marshall ask to marry him?",
		answer1: "Lily",
		answer2: "Robin",
		answer3: "Mandy",
		answer4: "Barney",
		correctid: "answer1",
		correct: "Lily",
		correctImage: "proposal.jpg",
		position: "horizontal"},
	{	question: "Who plays Barney?",
		answer1: "Jason Segel",
		answer2: "Josh Radnor",
		answer3: "Neil Patrick Harris",
		answer4: "Cobie Smulders",
		correctid: "answer3",
		correct: "Neil Patrick Harris",
		correctImage: "neil.jpg", 
		position: "vertical"},
	{	question: "Ted has a crush on who?",
		answer1: "Lily",
		answer2: "Robin",
		answer3: "Barney",
		answer4: "Stella",
		correctid: "answer2",
		correct: "Robin",
		correctImage: "robin.jpg",
		position: "vertical"},
	{	question:"What does Barney say to Ted when he wants him to come to the bar?",
		answer1: "Suit up",
		answer2: "Hurry up",
		answer3: "Phone five",
		answer4: "Come on Bro",
		correctid: "answer1",
		correct: "Suit up", 
		correctImage: "suitup.jpg",
		position: "horizontal"},
	{  	question:"What is Barney's favorite game to play at the bar?",
		answer1: "Lazer Tag",
		answer2: "Have you met Ted",
		answer3: "Have you met Robin",
		answer4: "Pool",
		correctid: "answer2",
		correct: "Have you met Ted", 
		correctImage: "haveyou.png",
		position: "horizontal"},
	{	question:"Who plays Lily?",
		answer1: "Cobie Smulders",
		answer2: "Alyson Hannigan",
		answer3: "Sarah Michelle Geller",
		answer4: "Jessica Alba",
		correctid: "answer2",
		correct: "Alyson Hannigan", 
		correctImage: "lily.jpg",
		position: "horizontal",},
	{   question: "Who is the main character in the show?",
		answer1: "Barney",
		answer2: "Lily",
		answer3: "Marshall",
		answer4: "Ted",
		correctid: "answer4",
		correct: "Ted", 
		correctImage: "ted.jpg",
		position: "vertical"},
	{  	question: "Who invented the Lemon Law?",
		answer1: "Ted",
		answer2: "Barney",
		answer3: "Carl",
		answer4: "Marshall",
		correctid: "answer2",
		correct: "Barney", 
		correctImage: "lemonlaw.jpg",
		position: "vertical"},
	{	question:"What does Robin do for a living?",
		answer1: "News reporter",
		answer2: "Plumber",
		answer3: "Model",
		answer4: "Actress",
		correctid: "answer1",
		correct: "News reporter",
		correctImage: "news.jpg",
		position: "vertical"},
	{	question: "Who said, 'Oh yeaahh, you just know she likes it dirty.'",
		answer1: "Marshall",
		answer2: "Ted",
		answer3: "Robin",
		answer4: "Barney",
		correctid: "answer4",
		correct: "Barney", 
		correctImage: "shelikesit.jpg",
		position: "horizontal"},],
	number: 10,
	counter: 0,
	questionNumber: 0,
	delay: 3000,
	correct: 0,
	incorrect: 0,
	unaswer: 0,
	createStartButton: function(){
		$("#info").html("<a class='btn btn-danger btn-md' id='start'>Start</a>");
	},
	createQuestions: function(a){
		trivia.run();
		$("#info").html("<p id='ques'>"+trivia.triviaQuestions[a].question+"</p>");
		$("#info").append("<a class='btn btn-primary btn-md answer' id='answer1'>"+trivia.triviaQuestions[a].answer1+"</a>");
		$("#info").append("<a class='btn btn-success btn-md answer' id='answer2'>"+trivia.triviaQuestions[a].answer2+"</a>");
		$("#info").append("<a class='btn btn-info btn-md answer' id='answer3'>"+trivia.triviaQuestions[a].answer3+"</a>");
		$("#info").append("<a class='btn btn-warning btn-md answer' id='answer4'>"+trivia.triviaQuestions[a].answer4+"</a>");
	},
	questionSequence: function(){
		if(trivia.questionNumber<trivia.triviaQuestions.length){
		trivia.number=10;
		trivia.createQuestions(trivia.questionNumber);
				$(".answer").on("click", function (event) {	
					var guess=$(this).attr("id");
					if(guess===trivia.triviaQuestions[trivia.questionNumber].correctid){
						$(".panel").attr('class', 'panel panel-success');
						$(".panel-title").html("<p id='correct'>Correct!</p>");
						$("#info").html("<img src='assets/images/"+trivia.triviaQuestions[trivia.questionNumber].correctImage+"' id='"+trivia.triviaQuestions[trivia.questionNumber].position +"'>");
						trivia.stop();
						trivia.correct++
						setTimeout(function() {
						trivia.questionNumber++;
						$(".panel").attr('class', 'panel panel-default');
						trivia.questionSequence();
						}, trivia.delay);
					} else if(guess!=trivia.triviaQuestions[trivia.questionNumber].correctid){
						$(".panel").attr('class', 'panel panel-danger');
						$(".panel-title").html("<p id='correct'>Incorrect!</p>");
						$("#info").html("<p id='incorrect'>The correct answer is: "+trivia.triviaQuestions[trivia.questionNumber].correct+"</p>");
						$("#info").append("<img src='assets/images/"+trivia.triviaQuestions[trivia.questionNumber].correctImage+"' id='"+trivia.triviaQuestions[trivia.questionNumber].position +"'>");
						trivia.stop();
						trivia.incorrect++
						setTimeout(function() {
						trivia.questionNumber++;
						$(".panel").attr('class', 'panel panel-default');
						trivia.questionSequence();
						}, trivia.delay);
					} 
				});
		} else {
			$(".panel").attr('class', 'panel panel-default');
			$(".panel-title").html("This are your results:");
			$("#info").html("<p id='correct'> Correct Answers: "+trivia.correct +"</p>");
			$("#info").append("<p id='incorrect'> Incorrect Answers: "+ trivia.incorrect+"</p>");
			$("#info").append("<p id='correct'> Unaswered: "+trivia.unaswer+"</p>");
		}
	},
	run: function(){
		trivia.counter=setInterval(trivia.decrement, 1000);
	},
	decrement: function(){
		trivia.number--;
		$(".panel-title").html("Time remaining: "+trivia.number+" seconds");
		if (trivia.number===0){
			trivia.stop();
			$(".panel").attr('class', 'panel panel-info');
			$(".panel-title").html("<p id='correct'>You ran out of time bro!</p>");
			$("#info").html("<p id='incorrect'>The correct answer is: "+trivia.triviaQuestions[trivia.questionNumber].correct+"</p>");
			$("#info").append("<img src='assets/images/"+trivia.triviaQuestions[trivia.questionNumber].correctImage+"' id='"+trivia.triviaQuestions[trivia.questionNumber].position +"'>");
			trivia.unaswer++;
			setTimeout(function() {
			trivia.questionNumber++;
			$(".panel").attr('class', 'panel panel-default');
			trivia.questionSequence();
			}, trivia.delay);}
		},

	stop: function(){
		clearInterval(trivia.counter);
	},
};

$(document).ready(function(){
		trivia.createStartButton();
		$("#start").on("click", function (event) {	
				trivia.questionSequence();
			});
});