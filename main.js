function Validate() {
  if(document.getElementById("Email").value==''){
    alert("Please provide your Email!");
 }
  if(document.getElementById("txtPassword").value==''){
    alert("Please provide your Password!");
 }
   if(document.getElementById("txtConfirmPassword").value==''){
      alert("Please confirm your Password!");
   }
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value;
    if (password != confirmPassword ) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Successful register")
    return true;
}
function changeForm(number){
    var divElements = document.getElementsByClassName('forms');
    console.log(divElements)
    if (number==0){
      divElements[0].classList.remove('hidden')
      divElements[0].classList.add('form-style')
      divElements[1].classList.add('hidden')
      divElements[1].classList.remove('form-style')
    }
    else if(number==1){
      divElements[1].classList.remove('hidden')
      divElements[1].classList.add('form-style')
      divElements[0].classList.add('hidden')
      divElements[0].classList.remove('form-style')
    }
  }
