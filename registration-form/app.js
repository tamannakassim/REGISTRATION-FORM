const form=document.getElementById('form');
const username=document.getElementById('usernameInput');
const email=document.getElementById('emailInput');
const password=document.getElementById('passwordInput');

 form.addEventListener('submit',(e) =>{
    e.preventDefault();
     validateInputs();
 })
 const setError=(element,message)=>{
   const getParent=element.parentElement;
   const errorDisplay=getParent.querySelector('.error');
   errorDisplay.innerText=message;

 }

 const setSuccess=element=>{
  const getParent=element.parentElement;
  const errorDisplay=getParent.querySelector('.error');
  errorDisplay.innerText="";
 }

 const validateInputs=()=>{
   const usernameValue=username.value.trim();
   const emailValue=email.value.trim();
   const passwordValue=password.value.trim();

   if(usernameValue===""){
   setError(username,"Please enter your username");
   }
   else if(usernameValue.includes(" ") ){
    setError(username,"Please enter correct username")
   }
   else{
    setSuccess(username);
   }
   if (emailValue===""){
    setError(email,"Please enter your email");
   }
   else{
    setSuccess(email);
   }
   if (passwordValue===""){
    setError(password,"Please enter your password");
   }
   else if(passwordValue.length<6){
    setError(password,"Password must be at least 6 characters");
   }
  else if(!passwordValue.match(/[A-Z]/)) {
    setError(password,"Password should contain uppercase");
  }
  else if(!passwordValue.match(/[a-z]/)) {
    setError(password,"Password should contain lowercase");
  }
  else if(!passwordValue.match(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\<\>\?\/.\,]/)) {
    setError(password,"Password should contain special character");
  }

  else{
    setSuccess(password);
  }
 };

/*let option = 'Z'

 switch (option){
  case 'A':
    alert('Correct')
    break;

  case 'B':
    alert('Incorrect Option, Try Again')
    break;

    default:
      alert('Error, Invalid option selected');
      break;
 }*/
 