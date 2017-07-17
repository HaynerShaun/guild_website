var fields_filled = 0;

function check_first_name(error_div){
    var errorMessage = "First Name field can only contain letters";
    alert(errorMessage);
    fields_filled++;
    register_checkbox();
    reportError(error_div, errorMessage);
}

function check_last_name(error_div){
    var errorMessage = "Last Name field can only contain letters";
    fields_filled++;
    register_checkbox();
    reportError(error_div, errorMessage);
}

function check_email(error_div){
    var errorMessage = "Must enter a valid email";
    fields_filled++;
    register_checkbox();
    reportError(error_div, errorMessage);
}

function check_display_name(error_div){
    var errorMessage = "Display Name can only contains numbers, letters, and _'s";
    fields_filled++;
    register_checkbox();
    reportError(error_div, errorMessage);
}

function check_password(error_div){
    var errorMessage = "First Name field can only contain letters";
    fields_filled++;
    register_checkbox();
    reportError(error_div, errorMessage);
}

function confirm_password(){
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm").value;
    var errorMessage = "The passwords do not match"

    if (password == confirm_password){
        fields_filled++;
        register_checkbox();
    } else {
        var errorText = document.createTextNode("The passwords do not match");
        parent.appendChild(errorText);
    }
}

function register_checkbox(){
    var checkbox = document.getElementById("terms_check");
    if (checkbox.checked && fields_filled >= 6){
        document.getElementById("register_submit").disabled = false;
    } 
}

//creates a <p>, if one doesnt already exist, to display error message
function reportError(error_div, errorMessage){
    alert(error_div);
	var errorId = error_div + '-err';
	var parentElement = document.getElementById(error_div);
	var errorElement;
	if(!document.getElementById(errorId)){
		errorElement = document.createElement('p');
		errorElement.setAttribute('id', errorId);
		errorElement.setAttribute('class', 'error-msg');
		errorElement.appendChild( document.createTextNode(errorMessage) );
		parentElement.appendChild(errorElement);
	} else {
		document.getElementById(errorId).innerHTML = errorMessage;
	}
}

//clears error message when problem is fixed
function clearError(errorId){
	var parent = document.getElementById(errorId);
	errorId += '-err';
	var child = document.getElementById(errorId);
	parent.removeChild(child);
}