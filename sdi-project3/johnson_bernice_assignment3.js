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
var           g1    =   "Bernice";   //string
var           g2    =   "Cindy";     //string
var           g3    =   "Amy";  
var          gMom = "grammy";

var summer = {   //variables
 temp: 90 > 60,  //properties

 

 summerTime: function (answer) {}, //boolean argument..answer the question is it summer time yet?
};

if (summer.temp === true) {
 console.log ("It is finally summer time now and me, " +  g2 + " and " +  g3 + " get to visit " + gMom +" and have fun.") ;  
     
}else{
 console.log ("no.");
}
var answer = true

summer.summerTime(true); //calling

//end method fucntion         



 




//Method..Procedure // with string, arguments
var gHouse = { 	
name:  "grammys house",  	
street: "grant avenue", 	
city:  "downingtown",   
	houseType:  "stone house",

 	
 grammyHouseGoTo: function  (place){}, 
} 
console.log("My grammy lives in "  + gHouse.city + " on " + gHouse.street + " street in a cute " + gHouse.houseType + ".");  
                                                                           

///end method





//Method Accessor //with property objects//with two object arguments.

var snack1 = {
    name:" peanutbutter tastykake",
    
    drink: "creme soda",

 getName: function (snack) {     //Method Accessor..object argument
          
            return(this.name);  //getting the snack arguement..returns peanut butter tastykake
}, 
 
getDrink: function (soda) {      //Method Accessor..object argument
           return(this.drink);   // getting the soda argument..returns creme soda

 }
};
var getName = snack1.getName
var getDrink = snack1.getDrink
console.log(snack1.getName()); //calling the getName method
console.log(snack1.getDrink()); //calling the getDrink method
getName(snack1.getName);        //calling
console.log("The first thing I look forward to doing when we get there is going straight to the upright freezer in the sunroom to get a nice cold ") + (snack1.getName()) + (".") 
console.log(" Then I go inside to greet grammy and she gives me a yummy ") + (snack1.getDrink()) + (" from the little kitchen pantry."); 


//WEIRD COMMENT IN FIREBUG: "_firebugIgnorecreme soda from the little kitchen pantry." Will not display my (snack1.getDrink()) should be peanutbutter tastykake & creme soda.
//end

//Method Function //with property number//number argument

 var timeTillIcecream = {   //funtion var
     minutes: 30 - 10,      //property number
 	

 getMinutes: function (number) {    //method function with number argument    
 	minutes = this.minutes       

 	return(this.minutes);   //getting the number argument...returns 20
 }, 
};   console.log( " We can hear the musical melody of the icecream truck coming down the road. Time to get icecream, it will take " + (timeTillIcecream.minutes) + " minutes to get here."); 

var getMinutes = timeTillIcecream.getMinutes   
 getMinutes(timeTillIcecream.getMinutes);  	//calling 

i=10; 
while (i<=20)   //while loop
	{ console.log("The ice-cream truck will be here in " + i +"  minutes."); //how many minutes it will take for the icecream truck.
     console.log("<br />");
      i++; 
  }  


//end

//Method  Mutator   //array  //for loop

//var koolaid ={
  // flavor:  [ "grape", "cherry", "strawberry"], //array
  // cups:   6,        //number
  // money:  25 , //number
  // total:  6 * 25,   //math
  
   //makeKoolaid: function ( )


var flavor=  [ "grape", "cherry", "strawberry"]; //array

console.log (flavor[0]); //returns grape
pennyCandy    =   ["candy fish", "now and laters", "tootsy rolls" ]; //array


//var pennyStore = "woodys"; 
var store = "woodys";
console.log(store);
console.log("Every summer we make koolaid for the truck drivers in the back yard then we go to ") + store + (".");
     
     //profitForKoolaid: function (cupsSold) (), 
   // if (cups === 6)
     //   console.log("We have to sell " + cups + ("cups to make enough to go to the") + store + (".") + ("It costs") + money + ("cents") + ("for each cup.");
    //if (total === true);
   //  console.log ("We will have a dollar fifty to spend on penny candy. ");
                //  var cupsSold = total,
                // return (cupsSold)
 //}else{
  //  console.log ("We wont have enough to get any candy.");

    //attempted to add this info
    console.log (flavor[0]); //returns grape
pennyCandy    =   ["candy fish", "now and laters", "tootsy rolls" ]; //array



var koolaid ={
   flavor:  [ "grape", "cherry", "strawberry"], //array
   cups:   6,        //number
   money:  25 , //number
   totalProfit:  6 * 25,   //math
  
   //getTotalProfit: function () { 
   //      return(this.totalProfit);
//console.log(koolaid.gettotalProfit());
}



 

//for loop code...I was going to use this for my koolaid array flavors.
//var i=0;
//for (i=0;i<=2;i++)
//{
//console.log("Cherry flavor " + i);
//console.log("<br />");





 




