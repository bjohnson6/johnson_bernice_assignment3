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


//Method procedure with argument Boolean ...Is it summmer time yet?

var summer ;
	summer = true; //boolean 
};
summerTimeAnswer: function (summer){

 }
	       
            if (summer === true) {
            	console.log("It is summer time and now me, " +  g2 + " and " +  g3 + " get to visit " + gMom +" and have fun."); //Method Procedure..boolean
            	

            	}else{
            		console.log("No we have to keep waiting longer."); //Method Procedure..boolean
            	    
                
      summerTimeAnswer(summer) ;         
 //end method fucntion         




//Method..Procedure // with string, string arguments

var gHouse = {
	name:  "grammy house",  //string
	street: "grant avenue", //string
	city:  "downingtown",   //string
	houseType:  "stone house" //string

	
};
grammyHouse: function  (house, city){  //2 string arguments
 

console.log("We are going to my  "+  gHouse.name +" for a couple weeks. " + "She lives in "  + gHouse.city + " on " + this.street + " street in a cute " + this.houseType + ".");
 };                                                                                                                   //this.street is an accessor
 {
     
  gHouse.logDetails = grammyHouse;

gHouse.logDetails(); //call the function
};


//end

//Method Accessor //with property objects//with two object arguments.

var snack1 = {
    name:" peanutbutter tastykake",
    
    drink: "creme soda",

 getName: function (snack) {
          
            return(this.name);
}, 
 
getDrink: function (soda) {
           return(this.drink);

 }
};
var getName = snack1.getName
var getDrink = snack1.getDrink
console.log(snack1.getName());
console.log(snack1.getDrink());
getName(snack1.getName);
console.log("The first thing I look forward to doing when we get there is going straight to the upright freezer in the sunroom to get a nice cold " + (snack1.getName()) + (".") 
console.log(" Then I go inside to greet grammy and she gives me a yummy " + (snack1.getDrink()) + " from the little kitchen pantry."); {

};

//Method Function //with property number

var timeTillIcecream = function(number) {
    	var minutesTillIcecream = 30
    	var timeToGetThere = 10      //add i
    	while (minutesTillIcecream > timeToGetThere) {
    		console.log( " We can hear the musical melody of the icecream truck. Time to get icecream, it takes " + timeToGetThere + " minutes unitil the icecream truck comes " + minutesTillIcecream+ " minutes");
    		return minutesTillIcecream-timeToGetThere;
    };
     console.log ("We have" + minutesTillIcecream + "minutes left until the icecream truck gets here.") ;
     return minutesTillIcecream;		
     timeTillIcecream(20); 

    	};

    	//while loop code 
    	var i=0;
while (i<=5)
  {
  document.write("The number is " + i);
  document.write("<br />");
  i++;
  }


 




