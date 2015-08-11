$(document).ready(function(){
	
	$("#lm").click(function(){
		// load "learn more screen"
		$("#body_container").fadeOut();
		$("#learnmore").fadeIn()
	});
	$("#bg , #bg:eq(1)").click(function(){
			$("#body_container").fadeOut();
		
		
			$("#learnmore").fadeOut();
		
		$("#begin_overlay").fadeIn();
	});
	$('#TimeSlider').on('change keyup', function(){
		$('#time').text(String($('#TimeSlider').val()) + " Minutes" );
	});
	$("#submit").click(function(){
		$("#begin_overlay").fadeOut('slow');
		$("#black_overlay").fadeIn('slow', function(){
			$("#rl").fadeIn('slow').delay(2000).fadeOut('slow', function() {
			$("#tb").fadeIn('slow').delay(2000).fadeOut('slow', function() {
				$("#ft").fadeIn('slow').delay(2000).fadeOut('slow', function(){
			$("#cl").fadeIn('slow').delay(2000).fadeOut('slow').delay(5000, function(){
			var toRepeat = (($("#TimeSlider").val())*6)
		//var loop = setInterval(repeat, 10010);

       // function repeat() {
            
			/*
			
            if (toRepeat === 0) {
                clearInterval(loop);
				
				
            }

            

            audio.play();
			*/
			var audio_file = new Audio("Audio/ticktock.mp3");
			audio_file.play();
			audio_file.addEventListener('timeupdate', function(){
                var buffer = .50;
                if((this.currentTime > this.duration - buffer) && (toRepeat !== 0)){
					toRepeat = toRepeat - 1;
					console.log(toRepeat);
                    this.currentTime = 0;
                    this.play();
                }else if(toRepeat === 0){
					this.stop();
					$("#black_overlay").fadeOut('slow', function(){
					$("#body_container").fadeIn('slow');
				});
				}
				
				}, false);

        });
		});
		});
		});
		});
		});
	
		
		
		
		
	});

