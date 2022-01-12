/*Valuding a form 
Developed by alsuhaibi96
*/

function validateForm() {
 nameValidating();
    emailValidating(); 
    checkPassword();
    ageValidation();
messageValidating();
}


  function nameValidating(){
    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(x.length<3||x.length>=10){
        alert("Your Name Must be more than 2 characters and less than 10 charaters ! ")
    }
  }


function emailValidating(){
    var email = document.getElementById('emailtxt');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }

}

function checkPassword() {
    let pass1 = document.forms["form"]["pass1"].value;
    let pass2 = document.forms["form"]["pass2"].value;



    // If password not entered
    if (pass1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (pass2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (pass1 != pass2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    // // If same return True.
    // else{
    //     alert("Password Match: Welcome Back!")
    //     return true;
    // }
}
function ageValidation(){
    let age = document.forms["form"]["age"].value;

    if(age<18){
        alert("Under 18 ! You are not allowed to be in here  ");
    }
}
function messageValidating(){
    let message = document.forms["form"]["message"].value;
    if(message.length<20){
        alert("Message has to be more than 20 characters");
    }

}
