function bark(name, weight){
	if(weight > 20){
		console.log(name + " says WOOF WOOF");
	} else{
		console.log(name + " says woof woof");
	}
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady",17);
bark("juno", 20);
bark("scottie", -1);
bark("dino", 0, 0);
bark("fido", "20");