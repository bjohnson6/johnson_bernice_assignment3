//Bernice Johnson
//May 14, 2012
//Deliverable 3
//Child Hood memories at my Grammys house.

alert("Childhood memories with Grammy!"); 

// stone house, fireplace, sidewalks, downingtown pa, big trees in the yard.
//sell koolaid to the truck drivers and neighbors in the backyard. (nested conditional, buy candy with money?)
//icecream truck, musical sound of it coming and icecream, white truck with a big icecream on top.
//freezer in sunroom filled with peanut butter tastykakes, creme soda in kitchen pantry(a-treat).
//summer time, hot outside, temperature, go to five and dime store and buy penny candy. Woodys store.
// Me and my sisters and Grammy. Amy and Cindy. Our ages, names.


//Global variables //need to have a string, number, boolean, array//these variables can be used anywhere in the code

var         gMom    =  "Grammy";   //string
var       summer    =   true;      //boolean
var        store    =  "Woodys";   //string
var         kAid    =  "koolaid";  //string
var   pennyCandy    =   ["candy fish", "now and laters", "tootsy rolls" ]; //array
var    candyCost    =   1;    //number
var       iTruck    =   "icecream truck";   //string
var           g1    =   "Bernice";   //string
var           g2    =   "Cindy";     //string
var           g3    =   "Amy";       //string
var       iCream    =   "icecream";  //string
var         cake    =   "peanut butter tastykakes";   //string
var        drink    =   "creme soda";   //string
var         temp    =   false;


//Method Function with argument Boolean ...Is it summmer time yet?

var summerTime = {
	summer = true;
};
 function 
	       
            if (summer === true) {
            	console.log("It is summer time and now me " + g2 + "and " + g3 + "get to visit " + gMom +"."); //Method function..boolean
            	 return (true);

            	}else{
            		console.log("No we have to keep waiting longer."); //Method function..boolean
            	     return (false);
               };    
 };//end method fucntion         




//Method..Procedure // with string, string arguments

var gHouse = {
	name:  "grammy house",  //string
	street: "grant avenue", //string
	city:  "downingtown",   //string
	houseType:  "stone house" //string

	
};
function grammyHouse (house, city){  //2 string arguments
 

console.log("We are going to my  "+  gHouse.name +" for a couple weeks. " + "She lives in "  + gHouse.city + " on " + this.street + " street in a cute " + this.houseType + ".");
 }     
     
  gHouse.logDetails = grammyHouse;

gHouse.logDetails(); //call the function

//end
 




