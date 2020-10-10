/**
 * Functions store the code to perform specific tasks and that the script can ask the function
 * to perform thattask whenever needed.
 * 
 * Sometimes a function can be called before it has been declared.This still works because
 * the interpreter runs through a script before executing each statement.So it will know that 
 * a function declaration appears later in the script.
 */


var message = 'Sign Up to receive our newsletter for 10% Off!';

//Declaring a function
function updateMessage(){
  var el = document.getElementById('message');
  el.textContent = message;
}
//Calling the function
updateMessage();

/** 
 * Declaring functions that need information and giving it parameters,inside the function
 * the parameters act like variables.
 * When calling a function that has parameters you have to pass in the arguments.
 * They can be provided as values or as arguments.
 * */ 

function getArea(length,width){
    area=length * width;
    return area;
}
var wallOne = getArea(2,8);
var wallTwo = getArea(3,9);

//Callng a functon before it is declared & getting multiple values out of a function
var areaOne = getSize(3,2,3)[0]
var volumeOne = getSize(3,2,3)[1]

function getSize(length,width,height){
    var area = length * height;
    var volume = length * height * height;
    var sizes = [area,volume]
    return sizes;
}
console.log(areaOne);
console.log(volumeOne);
/**
 * Function declarations like this one here mean that it is named and can be called even before it is declared;like shown above.
 *Function expressions on the other side are functions created when you put a function where the interpreter expects to
 see an expression. It has no name and therefore referred to as anonymus functions. In this case the function is not processed 
 until the interpreter gets to that moment;meaning that you cannot use this function until the interpreter gets there.
 * You can also define a variable and use it within an anonymus function.
 */
var area_s = function(){
    var c =90;
    var ia =20
    return c * ia;
 }
 var y = area_s();
 console.log(y);
 //var sises = areas(4,6);
//console.log(sises);  

/**
 * Javascript also has Immediately Invoked Function Expressions (IIFE),these are functions that are not given a name.
 * Instead they are executed once as the interpreter comes acrross them.
 * Below the variable area will hold the value returned from the function (Rather than storing the function itself so 
 * that it can be called later)
 * This concept of IIFEs is  commonly used as a wrraper around a set of code.Any variables declared within that anonymus function are 
 * effectively protected from variables in other scripts that mights have the same name.A concept which manifests in scope.IIFEs are a
 * porpular technique in jQuery.
 */

var area_b = (function(){
     var width = 800;
     var length = 800;
     return width * length;
}());
console.log(area_b);

/**
 * _____VARIABLE SCOPE_____
 * When a variable is created within a function its a local variable/function-level variable which can 
 * only be used within the local scope/function-level scope.It CANNOT be accessed outside the function in which it was declared.
 * The interpreter creates a local varable each time the function is run and removes it as soon as it has finished its task.Meaning 
 * that if the function runs twice, the variable can have different values each time.
 * Two different functions can use variables with the same name without any  naming conflict.
 * 
 * Creating a variable outside a function means that it can be used anywhere within the script. It is called a global variable,has a global scope.
 * Global variables can be kept in memory for as long as the web page is loaded into the web browser.
 * They are also at a risk of naming conflicts.
 * 
 * Forgetting to declare a variable using the var keyword within a function will work 
 * but it will be treated as a global variable,its a bad practise. 
 */
function getWallSize(L,W){
    var area = L * W;
    return area;     // area is a local variable
}
var wallSizes = getWallSize(45,900) // awllSizes is a global variable
console.log(wallSizes);


/**
 * Objects group together variables and functions into a model in the real world.
 * In an object variables become known as properties and functions become methods.Objects have a key/value pair.
 * You access the properties and the methods of an object using the dot notation.You can also use the square
 * brackets which applies to properties only or a variable is being used in place of the property name.
 * Below is literal notaton of creating an object:
 */


 var hotel = {
     name : 'Quay',
     rooms : 40,
     facilities :['Gym','Pool','Bank'],
     booked : 21,
     checkAvailability : function(){
         return this.rooms - this.booked;
     }
 };
var elFirst = document.getElementById('hot_1');
elFirst.textContent = 'Name   '+hotel.name+'Facilities    '+ hotel.facilities+'Rooms    '+hotel.rooms;


 var hotelTwo ={
     name:'Park',
     rooms:120,
     booked:170,
     facilities:['Gym','Pool','Bank'],
     golfPark:true,
     checkAvailability : function(){
         return this.rooms - this.booked;
     }
 };
var elSecond = document.getElementById('hot_2');
elSecond.textContent = 'Name  '+ hotelTwo.name+ 'Rooms Available     ' +hotelTwo.rooms+'Facilities ;   '+hotelTwo.facilities;


/**
 * Objects can also be created using constructor notation.The new keyword and Object contructor create a new object,
 * you the add properties using the dot notation.
 */

var cc_hotel = new Object();
cc_hotel.name ='County Hotel';
cc_hotel.rooms=900;
cc_hotel.booked=765;
cc_hotel.checkAvailability = function(){
    var available=this.rooms - this.booked;
    return available;
}
cc_hotel.checkAvailability(); 
/**
 * The properties of an object can also be updated or deleted. 
 */
hotelTwo.name='JSung';
//delete hotelTwo.name;
//hotelTwo.name=''


/**
 * Multiple objects can also be created using  the Object constructor,which uses a function template to 
 * generate new objects.The this keyword is used to indicate that the method or the property belongs to the object
 * created by this function at that moment.The function name here starts with a capital letter to remind that you need to use
 * the new keyword.
 * Then instances of the object are then created using the new keyword. 
 */

function Hotel(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability=function(){
         return this.rooms - this.booked;
    };
}

var hotelQu = new Hotel('Quay',70,40);
var truth = new Hotel('Truth',150,60);
truth.checkAvailability();