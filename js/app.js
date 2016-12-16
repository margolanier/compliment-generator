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
	var index;
	
	/**
	 * Build construct for Compliment objects
	 * Create array to hold all compliments
	 */
	function newCompliment(src, msg, img) {
		return {
			src: src,
			msg: msg,
			img: img
		};
	}
	
	var allCompliments = [
		newCompliment(
			"The Help",
			"You is kind You is smart. You is important.",
			"theHelp.jpg"
		),
		
		newCompliment(
			"Goodfellas",
			"Goddamn you are one suave fuck.",
			"goodfellas.jpg"
		),
		
		newCompliment(
			"Office Space",
			"Boy, that's just a straight shooter with upper management written all over him.",
			"officeSpace.jpg"
		),
		
		newCompliment(
			"Star Wars",
			"The force is strong with this one.",
			"starWars.jpg"
		),
		
		newCompliment(
			"The Matrix",
			"You are the one, *name*.",
			"matrix.jpg"
		),
		
		newCompliment(
			"The Lord of the Rings: The Fellowship of the Ring",
			"I would rather have one lifetime with you than face all the ages of this world alone.",
			"lordOfTheRings.jpg"
		),
		
		newCompliment(
			"Princess Bride",
			"There's a shortage of perfect breasts in this world, it'd be a pity to damage yours.",
			"princessBride.jpg"
		),
		
		newCompliment(
			"When Harry Met Sally",
			"I love that it takes you an hour and a half to order a sandwich.",
			"whenHarryMetSally.jpg"
		),
		
		newCompliment(
			"Wet Hot American Summer",
			"I love it that sometimes for no reason you're late for school.",
			"wetHotAmericanSummer.jpg"
		),
		
		newCompliment(
			"Napoleon Dynamite",
			"I see you're drinking one percent [milk].  Is that because you think you're fat?  Because you're not. You could be drinking whole if you wanted to.",
			"napoleonDynamite.jpg"
		),
		
		newCompliment(
			"Juno",
			"You're like the coolest person I've ever met, and you don't even have to try.",
			"juno.jpg"
		),
		
		newCompliment(
			"Anchorman",
			"You're so wise.  Like a miniature buddha covered in hair.",
			"anchorman.jpg"
		),
		
		newCompliment(
			"Wayne's World",
			"[You're] a babe.  [You're] a RoboBabe.... If [you] were a president [you] be Baberaham Lincoln.",
			"waynesWorld.jpg"
		),
		
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
		$('#blurred-bg').css('display', 'block');
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
		var bgImg = 'assets/backgrounds/' + allCompliments[index].img;
		var compliment = allCompliments[index].msg;
		var movie = allCompliments[index].src;
		
		// Change background image
		$('body').css('background-image', 'url(' + bgImg + ')');
		$('#blurred-bg').css('background-image', 'url(' + bgImg + ')');
		
		// Change message
		document.getElementById('compliment').innerHTML=compliment;
		document.getElementById('source').innerHTML=movie;
		
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