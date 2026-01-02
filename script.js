const form = document.getElementById('signupForm');
const error = document.getElementById('error');
const success = document.getElementById('success');


form.addEventListener('submit',(e) => {

  e.preventDefault();
const loading = document.getElementById('loading');
  error.textContent = '';
  success.textContent = '';
  error.style.color = '';
  success.style.color = '';
//   get the form values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPs = document.getElementById('confirmPassword').value.trim();

  //   Validate inputs
  if(!username || !email || !password || !confirmPs){
    error.textContent = "All fields are required";
    error.style.color = 'red';
    setTimeout(() =>{error.textContent = ''}, 3000);
  }
  else if(!email.includes('@')){
    error.textContent = 'Please check your email validation';
    error.style.color = 'red';
  }
  else if(password !== confirmPs){
     error.textContent = 'Passwords do not match';
    error.style.color = 'red';
    setTimeout(() =>{error.textContent = ''}, 1000);
  }
  else if (password.length < 6){
    error.textContent = 'Password must not be less than six digits';
    error.style.color = 'red';
    setTimeout(() =>{error.textContent = ''}, 1000);
  }else{
    console.log('Form submitted');
    success.textContent = `Hey ${username}, We have received your message and we will contact you by your ${email}.`
    success.style.color = 'green';
    form.reset();
    setTimeout(() =>{success.textContent = '';}, 4000);
  }
});
