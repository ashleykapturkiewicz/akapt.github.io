// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
	var counter = 0;
	$("#clickme").click(function(){
		counter++;
		console.log(counter);
		var colorChange;
		$("#click-num").text(counter);
		if(counter === 5){
			colorChange = "red";
		}
		else if(counter === 10){
			colorChange = "green";
		}
		else if(counter === 15){
			colorChange = "blue";
		}	
		else{
			colorChange = "black";
		}
		$("body").css("background-color", colorChange);
	})
})
