
var random_result
var win = 0;
var loss = 0;
var previous = 0;

// start and reset
var resetAndStart = function() {
	$(".gems").empty();

	var images =[
	'assets/images/green.png',
	'assets/images/blue.png',
	'assets/images/yellow.png',
	'assets/images/black.png'];

// random number counter
 random_result = Math.floor(Math.random() * 19) + 111;

$("#result").html('Random Result:  ' + random_result);


// gems random number

for(var i = 0; i < 4; i++){
var random = Math.floor(Math.random() * 12) + 1;

var gem = $("<div>");
	gem.attr({"class": 'gem', "number-random": random});

	gem.css({
		"background-image":"url('" + images[i] + "')",
		"background-size":"cover"
	});



$(".gems").append(gem);

	
	}
}

resetAndStart();
var reset = function(){

}

// gem button function

$(document).on('click', ".gem" ,function(){

	var num = parseInt($(this).attr('number-random'));


	// win/loss counter

	previous += num;

	$('#total').html( "Your Score! " + previous)

	if(previous > random_result){
		loss --;
		$("#loss").html("loss " + loss);

		previous = 0;

		$('#total').html(previous);

			resetAndStart();

		}
		else if(previous === random_result){
			win ++;
			$("#win").html( "wins " + win);

			$('#total').html(previous);


			previous = 0;

			resetAndStart();
		}
	

	console.log(previous); 

});

