//Promises - is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// 3 States - Pending, FullFilled (Resolved), Rejected
// Promise takes 2 parameter as function - resolve and reject


var cartDetailpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("cartDetailsSubmit Logic");
    }, 2000);
})

function addressDetailsSubmitPromiseFunc(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("addressDetailsSubmit Logic");
        }, 3000);
    })
}


function paymentDeailsSubmitPromiseFunc(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("paymentDeailsSubmit Logic");
        }, 4000);
    })
}

function orderSummaryDetails(result) {
    console.log(result);
    console.log("orderSummaryDetails Logic")
}

cartDetailpromise
    .then(
        result => {
            return result;
        })
    .then(
        result => {
            return addressDetailsSubmitPromiseFunc(result); // Need to return promise
        })
    .then(
        result => {
            return paymentDeailsSubmitPromiseFunc(result);
        })
    .then(
        result => {
            orderSummaryDetails(result);
        })
    .catch(reject => {
        console.log(reject);
    })


