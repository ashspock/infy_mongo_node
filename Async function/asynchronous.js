const bank = require('./bank')// importing all methods from bank.js
async function callBank() {
    try {
        let balance = await bank.checkPayerBalance()
        let debit = await bank.deductAmountFromPayer(balance)
        let credit = bank.creditAmountToPayee(await debit)//multiple await does not affect the resolved promise
        // promise returned by creditAmountToPayee is not resolved here
        console.log('Finished, ' + await credit)//promise is resolved inside console.log 
        // try removing await in the console.log statement and execute
        // or try below code 
        // console.log('Finished, ' + await bank.creditAmountToPayee(await bank.deductAmountFromPayer(await bank.checkPayerBalance())));
        
        /* Here the promises are chained in single line remember the executions starts from 
           innermost function i.e. checkPayerBalance() first and value is passed to outer layers one by one after resolving each */
    } catch (err) { // handles all errors inside try block
        console.log(err + '\nSorry, The amount cannot be transferred!');
    }
}
callBank()//calling the async function
