function calculateInvestment() {
	var interestRate = document.getElementById("AIR").value;
	interestRate = parseInt(interestRate);

	var years = document.getElementById("NOY").value;
	years = parseInt(years);

	var investment = document.getElementById("YI").value;
	investment = parseInt(investment);

	var outputSection = document.getElementById("output");

	if (Number.isInteger(interestRate) && interestRate>=1 && interestRate<=20) {
		interestRate = interestRate/100;
	}
	else {
		window.alert("The Annual Interest Rate must be a number between 1 and 20. Please try again.");
	}

	if (Number.isInteger(years) && years>=0 && years<=10) {
		var total = investment * ((Math.pow(1+interestRate, years) - 1)/interestRate);
		total = total.toFixed(2);
	}
	else {
		window.alert("The Number of Years can not exceed 10 and can not be negative. Please try again.");
	}

	outputSection.innerHTML = "$" + total;

}

function clear() {
	document.getElementById("YI").selectedIndex = "0";
	document.getElementById("AIR").value = "";
	document.getElementById("NOY").value = "";
	document.getElementById("output").innerHTML = "";

}

window.onload = function() {
    document.getElementById("calculate").onclick = calculateInvestment;
    document.getElementById("clear").onclick = clear;
}