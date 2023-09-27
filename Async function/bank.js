let isBalanceEnough = false;//change it to false to throw error
// all exported methods are asynchronous to emulate database interactions
exports.checkPayerBalance = async function () {
    if (isBalanceEnough)
        return ('Checked Payer Balance,');
    else {
        throw new Error('Not Enough Balance');
    }
};
exports.deductAmountFromPayer = async (message) => {
    return (message + ' Amount Deducted From Payer,');
};
exports.creditAmountToPayee = async (message) => {
    return (message + ' Amount Credited to Payee.');
};
