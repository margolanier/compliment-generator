$(document).ready(function() {
	
	$(document).foundation();
	
	// Get today's date
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("weekday").innerHTML = days[d.getDay()];
	
	
	var name = '';
	var compliment_list = [1, 2, 3, 4];
	var Compliment = {};
	
	function newCompliment(movie, quote, src, img) {
		this.movie = movie;
		this.quote = quote;
		this.src = src;
		this.img = 'assets/' + img;
	}
	
	newCompliment('comp1', 'Hello- this is message 1', 'Anonymous1', 'bg1.jpg');
	newCompliment('comp2', 'Hello- this is message 2', 'Anonymous2', 'bg2.jpg');
	newCompliment('comp3', 'Hello- this is message 3', 'Anonymous3', 'bg3.jpg');
	newCompliment('comp4', 'Hello- this is message 4', 'Anonymous4', 'bg4.jpg');
	
	//console.log(compliment_list);
	//console.log(Compliment);
	
	// Get name of user
	$( "#submit-name" ).click(function() {
		name = document.getElementById('user-name').value;
		updateMessage();
	});
	
	
	// Change background and message
	function updateMessage() {
		// Select random item from compliments array
		var randomNumRange = compliment_list.length;
		var randomItem = Math.floor(Math.random() * randomNumRange);
		console.log('item = ' + randomItem);
		Compliment[name] = Compliment[randomItem];
		var tempURL = 'assets/bg2.jpg';
		$('body').css('background-image', 'url(' + tempURL + ')'); //Compliment[name].img
		$('#blurred-bg').css('background-image', 'url(' + tempURL + ')');
		$('#form-wrapper').css('display', 'none');
		$('#message-wrapper').css('display', 'block');
	}
	
	
/*	movie: "Step Brothers",
	quote:  "I want to roll you into a little ball and shove you up my vagina.",
	src: "", 
	img: "stepBrothers.jpg",

	movie: "Goodfellas",
	quote:  "Goddamn you are one suave fuck.",
	src: "",
	img: "goodfellas.jpg",

	movie: "Office Space",
	quote: "Boy, that's just a straight shooter with upper management written all over him."
	src: "", 
	img: "officeSpace.jpg",

	movie: "Star Wars",
	quote: "The force is strong with this one.",
	src: "", 
	img: "starWars.jpg",

	movie: "The Matrix",
	quote: "You are the one, *name*.",
	src: "",
	img: "matrix.jpg",

	movie: "The Lord of the Rings: The Fellowship of the Ring",
	quote: "I would rather have one lifetime with you than face all the ages of this world alone.",
	src: "",
	img: "lordOfTheRings.jpg",

	movie: "Billy Madison",
	quote: "That Veronica Vaughn is one piece of ace."
	src: "",
	img:"billyMadison",
	
	movie: "Princess Bride",
	quote: "There's a shortage of perfect breasts in this world, it'd be a pity to damage yours.",
	src: "",
	img:"princessBride.jpg",
	
	movie: "Fight Club",
	quote: "My god, I haven't been fucked like that since grade school.",
	src: "",
	img:"fightClub,jpg",
	
	movie: "When Harry Met Sally",
	quote: "I love that it takes you an hour and a half to order a sandwich.",
	src: "",
	img:"whenHarryMetSally.jpg",
	
	movie: "Wet Hot American Summer",
	quote: "I love it that sometimes for no reason you're late for school.",
	src: "",
	img:"wetHotAmericanSummer.jpg",
	
	movie: "Napolean Dynamite",
	quote: "I see you're drinking one percent [milk].  Is that because you think you're fat?  Because you're not. You could be drinking whole if you wanted to."
	src: "",
	img:"napoleanDynamite.jpg"
	
	movie: "Juno",
	quote: "You're like the coolest person I've ever met, and you don't even have to try.",
	src: "",
	img: "juno.jpg"
	
	movie: "The Graduate",
	quote: "You're the most attractive of all my parents' friends.  I mean that.",
	src: "",
	img: "graduate.jpg",
	
	movie: "Anchorman",
	quote: "You're so wise.  Like a miniature buddha covered in hair.",
	src: "",
	img: "anchorman.jpg",
	
	movie: "Wayne's World",
	quote: "[You're] a babe.  [You're] a RoboBabe.... If [you] were a president [you] be Baberaham Lincoln.",
	src: "",
	img: "waynesWorld.jpg",*/
	
});