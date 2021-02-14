function validate2() {
      
    if( document.myForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.text.value == "" || isNaN( document.myForm.text.value )) {
       
       alert( "Please provide your question or concern." );
       document.myForm.text.focus() ;
       return false;
    }
    alert("we will get back to you as soon as possible")
}