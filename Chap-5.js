//Call Back function

//Checkout Page => Cart Details Submit >> Address Details Sumit >> Payment Details Submit >> Order Summary Details


//Call Back function / Pyramid of Doom
// Inversion of control - We are passing addressDetailsSubmit responsibility to get executed in cartDetailsSubmit - Our control get lost there

//Solution to this problem - Promises/Asyn Await

cartDetailsSubmit(addressDetailsSubmit);

function cartDetailsSubmit(addressDetailsSubmit) {
	setTimeout(() => {
		console.log("cartDetailsSubmit Logic")
		addressDetailsSubmit(paymentDeailsSubmit);
	}, 2000);
}

function addressDetailsSubmit(paymentDeailsSubmit) {
	setTimeout(() => {
		console.log("addressDetailsSubmit Logic")
		paymentDeailsSubmit(orderSummaryDetails);
	}, 2000);
}

function paymentDeailsSubmit(orderSummaryDetails) {
	setTimeout(() => {
		console.log("paymentDeailsSubmit Logic")
		orderSummaryDetails();
	}, 2000);
}

function orderSummaryDetails() {
	console.log("orderSummaryDetails Logic")
}