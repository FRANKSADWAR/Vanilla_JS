/**
 * 
 * This code uses IIFE (Immediately Invoked Function Expression) so that  the scope of the variables are protected.
 * 
 */

(function(){
    //FIRST PART CREATES HOTEL OBJECT AND WRITES OUT THE OFFER DETAILS

    // create a hotel object using the function template method(classes).Check on ES2015  Classes
    function Hotels(name,roomRate,discount){
        this.name=name;
        this.roomRate = roomRate;
        this.discount = discount;
        this.offerPrice = function(){
            var offerRate = this.roomRate  - (this.roomRate *  ((this.discount)/100));
            return offerRate.toFixed(2);
        }
    }
    // create a hotel object from the function template
    var hotelPark = new Hotels('The Truth',240,15);

    // Write out the hotel name,standard rate and special rate

    var hotelName,roomRate,specialRate;                             // DECLARE THE VARIABLES TO USE
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotelPark.name;                         //WRITE HOTEL NAME
    roomRate.textContent = '$'+ (hotelPark.roomRate).toFixed(2);    //WRITE ROOM  RATE
    specialRate.textContent = '$' + hotelPark.offerPrice();         // WRITE THE OFFER PRICE
    
    // SECOND PART CALULATES THE EXPIRY DATE DETAILS OF THE OFFER

    var expiryMsg;   //Delay Message to users
    var today;       // Today's date
    var elEnds;      // The element that shows message about the offer ending

    function offerExpires(today){
        // Declare variables within the function for local scope
        var weekFromToday,day,date,month,year,dayNames,monthNames;
        // Add 7 Days time (adds in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 *1000);

        // Create arrays to hold days & months
        dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];

        // Collect the parts of the date to show on the page
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the Maeesage
        expiryMsg = 'Offer expires next ';
        expiryMsg+= day + '<br />('+date+ ' ' +month+' '+year+')';
        return expiryMsg;
    }
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
    
    // Finish the immediately invoked function expression
}());