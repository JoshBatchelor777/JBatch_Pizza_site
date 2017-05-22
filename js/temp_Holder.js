// receipt

function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0; // Monetary value
	var sizeTotal = 0; // Value to be accumulated and extracted, then converted into runningTotal
	var sizeArray = document.getElementsByClassName("size");

	for (var i=0; i<sizeArray.length;i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} 
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // <-- **THIS PASSES THE VARIABLES ON TO THE NEXT FUNCTION**!!!!!!!!!!!!!!!!!
};


// meats


function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal,text1);
};		
	


// veggies

function getVeggie(runningTotal,text1) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veggies");
	for (var k = 0; k < vegArray.length; k++) {
		if (vegArray[k].checked) {
			selectedVeg.push(vegArray[k].value);
			console.log("selected veggie item: ("+vegArray[k].value+")");
			text1 = text1+vegArray[k].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	console.log("total selected veg items: "+vegCount);
	console.log("veg text1: "+text1);
	console.log(vegCount+" veg - 1 free Veg = "+"$"+vegTotal+".00");
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	getCheese(runningTotal,text1);
};




// cheese

function getCheese(runningTotal,text1) {
	var selectedChz = [];
	var chzArray = document.getElementsByClassName("cheese");
	for (var h=0; h<chzArray.length;h++) {
		if (chzArray[h].checked) {
			var chzTotal = chzArray[h].value; // assign value to be extrapilated and put into runningTotal
			text1 = text1+selectedChz+"<br>";
			console.log("selected chz item: ("+chzArray[h].value+")");
		}
	}
	if (selectedChz === "Regular") {
		chzTotal = 0;
	} else if (selectedChz === "No Cheese") {
		chzTotal = 0;
	} else if (selectedChz === "Extra Cheese") {
		chzTotal = 3;
	}
	runningTotal = (runningTotal + chzTotal);
	console.log(chzTotal);
	console.log("chz text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;

	getCrust(runningTotal,text1);
};



// crust 


function getCrust(runningTotal,text1) {
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var u=0; u<crustArray.length;u++) {
		if (crustArray[u].checked) {
			var crustTotal = crustArray[u].value; // assign a value to be extrapilated and put into runningTotal
			text1 = text1+selectedCrust+"<br>";
			console.log("selected chz item: ("+crustArray[u].value+")");
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	} 
	runningTotal = (runningTotal + crustTotal);
	console.log(crustTotal);
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;

};