var $ = document;
var lpassInput = $.getElementById("lpassword");
var passErr = $.getElementById("logInPassErr");
var lsubmit = $.getElementById("lSubmit");
var usernames = ["sajjad","ahmad","mahmood","mamad","payam","behrooz","shahram","bahram","parham","behzad","nafise","nastaran"];
function passLen() {
    if (lpassInput.value.length < 1 || lpassInput.value.length > 7) {
        passErr.style.visibility = "hidden";
    }else {
        passErr.style.visibility = "visible";
    }
}
function changeFormToLogIn(){
        $.getElementById("signInCon").style.display = "none";
        $.getElementById("logInCon").style.display = "flex";
}
function changeFormToSignIn(){
        $.getElementById("signInCon").style.display = "flex";
        $.getElementById("logInCon").style.display = "none";
}
function activeLogIn(){

}
function activeSignIn(){

}
function userLen(){

}