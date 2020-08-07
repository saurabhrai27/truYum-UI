function validateEditMenuItem(){
    var a = document.getElementById('menu-name').value;
	// var b = document.getElementById('numbe').value;
	var b = document.forms["menu-form"]["price"].value;
	var c = document.getElementById("menu-dateOfLaunch").value;
	if (a.length>1 && a.length<66) {
		if (isNaN(b)|| b=="" ) {
			alert("Price should in digits and not empty");
			return false;
		}
		else{
			var dt = Date.parse(c)
			if (isNaN(dt)) {
				alert("Date format wrong (Hint: DD-MM-YYYY)");
				return false;
				
			}
			else{	
				alert("This item is valid..")
				return true;
			}
			
		}
	}
	else{
		alert('Name length check(Hint: Should be between 2-66)');
		return false;
	}
}