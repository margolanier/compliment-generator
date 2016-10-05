$(document).ready(function() {
	
	$(document).foundation();
	
	var name = '';
	var compliment_list = [1, 2, 3, 4];
	var Compliment = {};
	
	function newCompliment(name, msg, src, img) {
		this.name = name;
		this.msg = msg;
		this.src = src;
		this.img = 'assets/' + img;
	}
	
	newCompliment('comp1', 'Hello- this is message 1', 'Anonymous1', 'bg1.jpg');
	newCompliment('comp2', 'Hello- this is message 2', 'Anonymous2', 'bg2.jpg');
	newCompliment('comp3', 'Hello- this is message 3', 'Anonymous3', 'bg3.jpg');
	newCompliment('comp4', 'Hello- this is message 4', 'Anonymous4', 'bg4.jpg');
	
	console.log(compliment_list);
	console.log(Compliment);
	
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
		$('body').css('background-image', 'url(assets/bg' + randomItem + '.jpg)'); //Compliment[name].img
	}	
	
});