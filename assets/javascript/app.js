var startTime = 10;
function runTime (){
  	startTime--;
  	console.log(startTime);
	if (startTime !== 0){
		$("#timer").text(startTime);	
	}else {
		clearInterval(gameTime);
			getResults();
	};
	
};

var gameTime = setInterval(runTime, 1000);
$('#Q1 input').on('change', function() {
	console.log($('input[name=Q1]:checked', '#Q1').val());
   if (($('input[name=Q1]:checked', '#Q1').val()) == "correct"){
   	      return correctAnswer++;
        } else {
        	return wrongAnswer++;
        }
 
});

$('#Q2 input').on('change', function() {
   if (($('input[name=Q1]:checked', '#Q2').val()) == "correct"){
   	      return correctAnswer++;
        } else {
        	return wrongAnswer++;
        }
 
});

$('#Q3 input').on('change', function() {
   if (($('input[name=Q1]:checked', '#Q3').val()) == "correct"){
   	      return correctAnswer++;
        } else {
        	return wrongAnswer++;
        }
 
});

var correctAnswer, wrongAnswer = 0;
function getResults(){	
	$("#results").html(
		"<h4> Correct: " + parseInt(correctAnswer) +
		"</h4><h4> Wrong: "+ parseInt(wrongAnswer) +"</h4>")
}	
