// Import necessary modules
const flightDb = {}

flightDb.generateId = async () => {
    let model = await dbModel.getFlightCollection()
    let ids = await model.distinct("bookings.bookingId")
    let bId = Math.max(...ids);
    return bId + 1;

}

//To retrive all bookings all flights
flightDb.getAllBookings = async () => {
    //your code goes here
}

//To get bookings of a particular flight Id
flightDb.getbookingsByFlightId = async (flightId) => {
    //your code goes here
}

//To retreive the document of a flight based on te flightId
flightDb.checkAvailability = async (flightId) => {
    //your code goes here
}

//To bookings done by a customer for a particular flight Id
flightDb.customerBookingsByFlight = async (customerId, flightId) => {
    //your code goes here
}

//To book a flight for a customer
flightDb.bookFlight = async (flightBooking) => {
    //your code goes here
}
//Export flightDb as module
