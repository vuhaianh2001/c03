function Hotel(name,rooms,booked){
    this.name = 'park';
    this.rooms = 120;
    this.booked = 77;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}
var quayHotel = new Hotel('quay',40,25);
var parkHotel = new Hotel('Park',120,77);

var details1 = quayHotel.name + 'rooms';
details1 += quayHotel.checkAvailability();
var elHotels1 = document.getElementById('hotel1');
elHotels1.textContent = details1;

var details2 = parkHotel.name + 'rooms';
details2 += parkHotel.checkAvailability();
var elHotels2 = document.getElementById('hotel2');
elHotels2.textContent = details2;