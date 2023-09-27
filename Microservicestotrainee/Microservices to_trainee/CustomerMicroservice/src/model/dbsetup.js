const collection = require('../utilities/connection');

const customerDb = [
    {
        customerId: "P1001",
        customerName: "Tom",
        customerType: "Platinum"
    },
    {
        customerId: "G1001",
        customerName: "John",
        customerType: "Gold"
    },
    {
        customerId: "S1001",
        customerName: "Steve",
        customerType: "Silver"
    }
]

exports.setupDb =async () => {
    return collection.getCustomerCollection().then((customer) => {
        return customer.deleteMany().then(() => {
            return customer.insertMany(customerDb).then((data) => {
                if (data) return "Insertion of customer data is successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}