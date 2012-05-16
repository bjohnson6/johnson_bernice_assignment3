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


//Global variables //need to have a string, number, boolean, array

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


//Method..Argument

var gHouse = {
	name:  "grammy house",
	street: "grant avenue",
	city:  "downingtown",
	state: "Pennsylvania",
	houseType:  "stone house"
	outside:  "sidewalks", "trees"

};

function  houseDetails(){   //information about Grammys house.
	console.log("Every summer me and my sisters" + g2 + "and" + g3 + "go to my " + this.name + "for a couple weeks to spend time with " + gMom");


}


