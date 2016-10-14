$(document).ready(function() {
	
	$(document).foundation();
	
	/**
	 * Get the date
	 */
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("weekday").innerHTML = days[d.getDay()];
	
	
	// Randomly select item
	var name = 'name';
	var lastCompliment;
	var randomValue;
	var index;
	
	/**
	 * Build construct for Compliment objects
	 * Create array to hold all compliments
	 */
	function newCompliment(msg, img) {
		return {
			msg: msg,
			img: img
		};
	}
	
	var allCompliments = [
		newCompliment(name + ', you are amazing.', 'bg1.jpg'), 
		newCompliment(name + ', you is kind, you is smart, you is important', 'bg2.jpg'),
		newCompliment(name + ', you\'re dope AF', 'bg3.jpg'),
		newCompliment('You are the coolest person ever, ' + name, 'bg4.jpg'),
	];
	
	
	/**
	 * On form submit:
	 * Save name of user, add name to compliment messages
	 * Shuffle compliments array and display first message
	 */
	$( "#submit-name" ).click(function(e) {
		e.preventDefault();
		
		// Get name of user, then hide the form
		name = document.getElementById('nameOfUser').value;
		$('#form-wrapper').css('display', 'none');
		console.log('name = ' + name);
		
		// Display the compliment div
		$('#message-wrapper').css('display', 'block');
		
		// Reset compliments list
		shuffle(allCompliments);
		index = 0;
		updateMessage();
	});
	
	
	/**
	 * On next button:
	 * Loop through compliment list
	 * At end of list, display share screen
	 */
	$( "#next-compliment" ).click(function(e) {
		e.preventDefault();
		
		// If there is another compliment in array, get next compliment
		if (index < allCompliments.length) {
			updateMessage();
		} else {
			getShareScreen();
		}
	});
	
	
	// Build shuffle method for array
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			
			// Swap it with the current element
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	}
	
	
	/**
	 * Get next Compliment object in array
	 * Change background and message
	 */
	function updateMessage() {
		var bgImg = 'assets/' + allCompliments[index].img;
		var compliment = allCompliments[index].msg;
		
		// Change background image
		$('body').css('background-image', 'url(' + bgImg + ')');
		$('#blurred-bg').css('background-image', 'url(' + bgImg + ')');
		
		// Change message
		document.getElementById('compliment').innerHTML=compliment;
		
		index++;
	}
	
	
	/**
	 * Display last message
	 * Option to share or start over
	 */
	function getShareScreen() {
		var bgImg = 'http://www.kemplen.co.uk/the-end/the-end.jpg';
		var message = 'this is the end.';
		
		// Change background image
		$('body').css('background-image', 'url(' + bgImg + ')');
		$('#blurred-bg').css('background-image', 'url(' + bgImg + ')');
		
		// Change message
		document.getElementById('compliment').innerHTML=message;
		$('#next-compliment').css('display', 'none');
	}
	
	
});