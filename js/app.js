let textbox = document.querySelector('#name');
let name = textbox.value;
let i = 0;

function init() {
	console.log('ready');
	
	let submit = document.querySelector('#submit');
	submit.addEventListener('click', getMessage);
	
	let next = document.querySelector('#next');
	next.addEventListener('click', getMessage);
}

function getMessage(name) {
	let parent = document.querySelector('#message');
	
	let compliment = document.querySelector('.compliment');
	compliment.textContent = compliments[i].quote;
	
	let title = document.querySelector('.title');
	title.textContent = compliments[i].title;
	
	i++;
}

window.addEventListener('load', init);



let compliments = [
{	title: "The Help",
	quote: "You is kind You is smart. You is important.",
	image: "theHelp.jpg",
},
{	title: "Goodfellas",
	quote: "Goddamn you are one suave fuck.",
	image: "goodfellas.jpg"
},
{	title: "Office Space",
	quote: "Boy, that's just a straight shooter with upper management written all over him.",
	image: "officeSpace.jpg"
},
{	title: "Star Wars",
	quote: "The force is strong with this one.",
	image: "starWars.jpg"
},
{	title: "The Matrix",
	quote: "You are the one, *name*.",
	image: "matrix.jpg"
},
{	title: "The Lord of the Rings: The Fellowship of the Ring",
	quote: "I would rather have one lifetime with you than face all the ages of this world alone.",
	image: "lordOfTheRings.jpg"
},
{	title: "Princess Bride",
	quote: "There's a shortage of perfect breasts in this world, it'd be a pity to damage yours.",
	image: "princessBride.jpg"
},
{	title: "When Harry Met Sally",
	quote: "I love that it takes you an hour and a half to order a sandwich.",
	image: "whenHarryMetSally.jpg"
},
{	title: "Wet Hot American Summer",
	quote: "I love it that sometimes for no reason you're late for school.",
	image: "wetHotAmericanSummer.jpg"
},
{	title: "Napoleon Dynamite",
	quote: "I see you're drinking one percent [milk].  Is that because you think you're fat?  Because you're not. You could be drinking whole if you wanted to.",
	image: "napoleonDynamite.jpg"
},
{	title: "Juno",
	quote: "You're like the coolest person I've ever met, and you don't even have to try.",
	image: "juno.jpg"
},
{	title: "Anchorman",
	quote: "You're so wise.  Like a miniature buddha covered in hair.",
	image: "anchorman.jpg"
},
{	title: "Wayne's World",
	quote: "[You're] a babe.  [You're] a RoboBabe.... If [you] were a president [you] be Baberaham Lincoln.",
	image: "waynesWorld.jpg"
}];