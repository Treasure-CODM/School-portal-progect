const checkBox = document.getElementById('check-terms')

document.getElementById("formData").addEventListener('submit',(e)=> {
  e.preventDefault();

  if (checkBox.checked) {

      //get input values
  const fullName = document.getElementById('nameInput').value
  const email = document.getElementById('emailInput').value
  const password = document.getElementById('passwordInput').value
  const department = document.getElementById('department').value
  const matricNumber = document.getElementById('matricNumber').value;

  //store user data in an object

  const user = {
    fullName,
    email,
    password,
    department,
    matricNumber
  }

  localStorage.setItem('user',JSON.stringify(user));
  alert("regristration successful !")

  //redirect to login page
  window.location.href = "./login.html";
  }   else {
    alert("You must agree to our terms and conditions to proceed")
  }

});



