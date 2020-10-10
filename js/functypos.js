function Hotel(name,rooms,booked){
    this.name = name;
    this.rooms= rooms;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.rooms - this.booked;
    }
}

var hotel1=new Hotel('The Truth',95,50);
var hotel2 = new Hotel("Queen's Quay",90,87);
var hotel3 = new Hotel('Ji Park',89,34);

var details1 = hotel1.name;
var rooms_1 = hotel1.checkAvailability();
//rooms_1+=hotel1.booked; 

var elName_1 = document.getElementById('hotel_name');
elName_1.textContent = details1;
var elRooms_1 = document.getElementById('avail_1');
elRooms_1.textContent = rooms_1;

hotel1.gym = true;
hotel2.pool= false;
var elGym = document.getElementById('gym_a');
elGym.className = 'Pool : ' + hotel1.gym;
var elPool = document.getElementById('pool_a');
elPool.className =  'Gym   : ' + hotel1.pool;   // Again find out about the className method


var details2 = hotel2.name;
var rooms_2 = hotel2.checkAvailability();

var elName_2 = document.getElementById('hotel1_name');
elName_2.textContent = details2;
var elRooms_2 = document.getElementById('avail_2');
elRooms_2.textContent = rooms_2;

var details3 = hotel3.name;
var rooms_3 = hotel3.checkAvailability();

var elName_3 = document.getElementById('hotel2_name');
elName_3.textContent = details3;
var elRooms_3 = document.getElementById('avail_3');
elRooms_3.textContent = rooms_3;

/**
 * We can also create an object using the below methods : 
 */

var l_hotel = {};
l_hotel.name = 'P Kora';
l_hotel.facilities =['gym','park'] ;
l_hotel.rooms = 90;
l_hotel.booked=70;
l_hotel.checkAvailability=function(){
   return  this.rooms - this.booked;
};

// Method two

var d_hotel ={
  name:'Serena',
  location:[36.09090,-0.91412376],
  rooms:450,
  booked:89,
  available:function(){
      return this.rooms - this.booked;
  }
};
d_hotel.available();



