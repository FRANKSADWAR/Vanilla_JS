/**
 * When a function is created at the top-level of a script  that is not inside another object or inside another 
 * function,then it is a the global scope.  Here the object is the window object,so using the this keyword refers
 * to the window Object.
 * Below, this is used to return the properties of the wimdow object.
 */

function windowSize(){

    var width = this.innerWidth;
    var height  = this.innerHeight;
    return [width,height];
}
var df = windowSize();
console.log(df);

/**
 * When refering to a variable within an object use the this keyword.
 * When a function is defined inside an object it becomes a method.In a method,this refers
 * to the containing object.For example:
 */
var shape = {
    length : 900,
    width  : 800,
    height : 567,
    getArea : function(){
      area = this.length * this.width;
      return area;
    },
    getVolume : function(){
      return (this.length * this.width * this.height);
    }
    
};
vol = shape.getVolume();
console.log(vol);

/**
 * All global variables also become properties of the window object.Example:
 */
var width = 776;
var shape_2 = { width:900 };  //shape_2 object with width property
// Defining an anonymus function to get the width
var getWidth = function (){
   document.write(this.width);
};
getWidth(); // this writes 776 to the screen

/**
 * Check on the one below,the o_shape() function has a method to write the len_w variable which is the global variable in the window object.
 * Assigning the o_shape object a method called getLen although it refers to the global len_w now means that the new getLen() method now
 * refers to the len_w object which now prints 2890.
 * 
 */
var len_w = 3200;
var k_shape ={  len_w : 2890 };
var o_shape = function(){
    document.write(this.len_w);
};
k_shape.getLen = o_shape;
k_shape.getLen();

/**
 * Arrays are also special types of objects that store related data and are accessed by index rather than keys.
 */
var f =['Lokichogo Hos','Migori Hos','Nakuru Hos' ];

var hospital ={
   name : 'Lokichogio National Hospital',
   capacity : 78000,
   level :5,
   category : 'Missionary',
   year_started : 1978,
   location : 'Lokichogio',
   coordinates : [33.898979, 4.323413],
   getMaxCapacity : function(){
       return (this.capacity * 5)
   }

};



// function template that acts as an object generator or constructor
function Hospitals(name,capacity,level,category,coordinates){
    this.name = name;
    this.capacity = capacity;
    this.level = level;
    this.category = category;
    this.coordinates = coordinates;
    this.maxCapacity = function(){
        if(this.level >= 4){
             return (this.capacity * 5);
          }
         else{
             return (this.capacity * 2)
         }  
     };
}

var nyeri = new Hospitals('PGH',24000,4,'Govt',[-1.456757,37.09324]);
nyeri.maxCapacity();





var x = hospital.coordinates[0];
var y = hospital.coordinates[1];
console.log(x , y);
/**
 * Objects can also be stored in an array.An array of objects stores objects instead.For example var hospitals_ke below
 */
var hospitals_ke = [{ name:'Nairobi',capacity:'89000',level:5,coordinates:[36.89765,-0.958656] },
              { name:'Baringo',capacity:'89000',level:5,coordinates:[36.89765,-0.958656]},
              {name:'Nakuru',capacity:'89000',level:5,coordinates:[36.89765,-0.958656]}];

console.log(hospitals_ke[1].name);              

//IIFEs
//Immediately Invoked Function Expressions
var getPath = (function(){
  var cash = 90000;
  var give = 7866;
  var bal =  cash - give;
  console.log(bal);
}());
getPath; // get path is not called as function

/**
 * Objects created with constructors are good when :
 *  You have a lot of objects with similar functionality for examle multiple slide shows,
 * or media players or multiple game characters within a page.
 */
function GamePlayers(width,height){
  this.width=width;
  this.heght=height;
}
var  media_a = new GamePlayers(345,900);



/**
 * ---------BUILT_IN OBJCECTS--------
 * Th browser comes with a set of built-in objects that are available within your script 
 * every time it is loaded into the browser.
 * You can imagine these objects to be divided into the following three categories:
 * 
 *  Browser Model which  contains the objects that represent the current browser window such as the 
 *  browser history , device screen.
 * 
 *  The Document Object Model whch uses objects to create a representation of the current web page.
 *  It creates an object for each element within the page.
 * 
 *  Global Javascript Objects represents things that the Javascript language needs to create a model of.
 *  For  example date objects.
 * 
 *  An object model is a group of related objects, each of which represent related things in the real world. 
 */

