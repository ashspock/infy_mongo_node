const dbModel = require('../utilities/connection');

const flightBookingDb = {}
    //Do not modify or remove this method
flightBookingDb.generateId = async() => {
    let model = await dbModel.getFlightCollection();
    let ids = await model.distinct("bookings.bookingId");
    let bId = Math.max(...ids);
    return bId + 1;
}

flightBookingDb.checkCustomer = async(customerId) => {
    //fetch the customer object for the given customer Id
}


flightBookingDb.checkBooking = async(bookingId) => {
    // fetch flight object which has the booking with the given bookingId
}

flightBookingDb.checkAvailability = async(flightId) => {
    // fetch the flight object for the given flight Id
}

flightBookingDb.updateCustomerWallet = async(customerId, bookingCost) => {
    // update customer wallet by reducing the bookingCost with the wallet amount for the given customerId
}

flightBookingDb.bookFlight = async(flightBooking) => {
    // book a flight ticket
}

flightBookingDb.getAllBookings = async() => {
    //get all the bookings done in all flights
}

flightBookingDb.customerBookingsByFlight = async(customerId, flightId) => {
    // get all customer bookings done for a flight
}

flightBookingDb.getbookingsByFlightId = async(flightId) => {
    // get all the bookings done for the given flightId
}

flightBookingDb.updateBooking = (bookingId, noOfTickets) => {
    // update no of tickets for the given bookingId
}

module.exports = flightBookingDb;