const collection = require('../utilities/connection');

const flightDb = [
    {
        flightId: "IND-101",
        AircraftName: "Delta Airlines",
        fare: 600,
        availableSeats: 1,
        status: "Running",
        bookings: [
            {
                customerId: "P1001",
                bookingId: 2001,
                noOfTickets: 3,
                bookingCost: 1800
            },
            {
                customerId: "S1001",
                bookingId: 2003,
                noOfTickets: 2,
                bookingCost: 1200
            }
        ]
    },
    {
        flightId: "IND-102",
        AircraftName: "JetBlue",
        fare: 750,
        availableSeats: 20,
        status: "Cancelled",
        bookings: [
            {
                customerId: "P1001",
                bookingId: 2002,
                noOfTickets: 3,
                bookingCost: 2250
            },
            {
                customerId: "G1001",
                bookingId: 2004,
                noOfTickets: 2,
                bookingCost: 1500
            }
        ]
    },
    {
        flightId: "IND-103",
        AircraftName: "United Airlines",
        fare: 800,
        availableSeats: 10,
        status: "Cancelled",
        bookings: [
            {
                customerId: "S1001",
                bookingId: 2005,
                noOfTickets: 1,
                bookingCost: 800
            },
            {
                customerId: "G1001",
                bookingId: 2006,
                noOfTickets: 4,
                bookingCost: 3200
            }
        ]
    }
]

exports.setupDb = () => {
    return collection.getFlightCollection().then((flight) => {
        return flight.deleteMany().then(() => {
            return flight.insertMany(flightDb).then((data) => {
                if (data) return "Insertion of flight db is successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}