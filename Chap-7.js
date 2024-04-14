//Async Await - Wrapper to Promise, async method retrun promise only internally


async function cartDetailPromiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cartDetailsSubmit Logic");
        }, 2000);
    })
}

async function addressDetailsSubmitPromiseFunc(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("addressDetailsSubmit Logic");
        }, 3000);
    })
}


async function paymentDeailsSubmitPromiseFunc(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("paymentDeailsSubmit Logic");
        }, 4000);
    })
}

async function orderSummaryDetails(result) {
    console.log(result);
    console.log("orderSummaryDetails Logic")
}
async function cartCheckOutProcess() {
    console.log("Case 01 :-")
    try {
        var cart = await cartDetailPromiseFunc();
        var addressDetails = await addressDetailsSubmitPromiseFunc(cart);
        var paymentDeails = await paymentDeailsSubmitPromiseFunc(addressDetails);
        await orderSummaryDetails(paymentDeails);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
    console.log("Case 02 :-")
    await cartDetailPromiseFunc().then((result) => {
        return addressDetailsSubmitPromiseFunc(result);
    }).then((result) => {
        return paymentDeailsSubmitPromiseFunc(result);
    }).then((result) => {
         orderSummaryDetails(result);
    }).catch((result) => {
        console.error('Error fetching data:', result);
    })
}
cartCheckOutProcess();
