//$(document).foundation()

//$( document ).ready(function() {

	console.log( "document loaded" );
	var name = 'Margo';

	var Compliment1 = {};
	Compliment1.quote: 'You are fabulous!',
	Compliment1.movie: 'movie name 1,
	Compliment1.year: 2000 

	var Compliment2 = {};
	Compliment2.quote: 'You are amazing!',
	Compliment2.movie: 'movie name 2,
	Compliment2.year: 2012 

	var ComplimentUser = function(name) {
		alert(Compliment2.quote + ' ' + name);
	}

	ComplimentUser('Sarah');
//});


// Get today's date
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("weekday").innerHTML = days[d.getDay()];

//document.getElementById("date").innerHTML = Date.today();


// On form submit
/*$('#input-name').submit(function(e) {
   if($('.errors').is(':visible')){
        e.preventDefault();
        // do something else here// some errors are visible :)
        return false; 
   }else{

   }*/

$("#input-name input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#input-name").submit();
        console.log('submitted');
    }
});