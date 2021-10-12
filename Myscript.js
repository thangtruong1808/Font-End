/* function validate()will validate form data */
function validate() {
    var sid = document.getElementById("sid").value;
    $("#sid").val();
    var pwd1 = document.getElementById("pwd1").value;
    $("#pwd1").val();
    var pwd2 = document.getElementById("pwd2").value;
    $("#pwd2").val();
    var uname = document.getElementById("uname").value;
    $("#uname").val();
    var genm = document.getElementById("genm").checked;
    $("#genm").prop("checked");
    var genf = document.getElementById("genf").checked;
    $("#genf").prop("checked");
    var errMsg = ""; /* create variable to store the error message */
    var result = true; /* assumes no errors */
    var pattern = /^[a-zA-Z ]+$/; /* regular expression for letters and spaces only */
    /* Rule 1, check if all required date are entered */
    if (sid == "") { //check whether User ID is empty
        errMsg += "User ID cannot be empty.\n";
    }
    if (pwd1 == "") { //check whether Password is empty
        errMsg += "Password cannot be empty.\n";
    }
    if (pwd2 == "") { //check whether re-typed Password is empty
        errMsg += "Retype password cannot be empty.\n";
    }
    if (uname == "") { //check whether User Name is empty
        errMsg += "User name cannot be empty.\n";
    }
    if ((genm == "") && (genf == "")) {
        ((!genm) && (!genf))
        errMsg += "A gender must be selected.\n"; //check whether gender is selected
    }
    /* Rule 2, check if the user ID contains an @ symbol */
    if (sid.indexOf('@') == 0) {
        errMsg += "User ID cannot start with an @ symbol.\n";
    }
    if (sid.indexOf('@') < 0) {
        errMsg += "User ID must contain an @ symbol.\n";
    }
    /* Rule 3, check if password and retype password are the same */
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }
    /* Rule 4, check if user name contains only letters and spaces */
    if (!uname.match(pattern)) {
        errMsg += "User name contains symbols.\n";
    }
    /* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }
    return result;
}

/* write the function toggle() that collapse/expand a section*/
function toggle() {
    $(this).parent().next().slideToggle();
    if ($(this).html() == "[-]") { /* Update the symbol on the "button" */
        $(this).html("[+]");
    } else { /* [-] <-> [+] */
        $(this).html("[-]");
    }
}

/* link HTML elements to corresponding event function */
function init() {

    $(".collapse").click(toggle); //link function toggle() to appropriate events

    $("#regform").submit(validate);
}
/* execute function init() once the window is loaded*/
window.onload = init;
$(document).ready(init);