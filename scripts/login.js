 function getUser (){
  const student =JSON.parse(localStorage.getItem("user"));
  return student;
}

document.getElementById("login-form-data")
.addEventListener('submit', (e) => {
e.preventDefault();


//get input values
const emailInput =document.getElementById("emailInput").value;
const passwordInput =document.getElementById("passwordInput").value;

let student = getUser();
if(student)

//rety=rieve user from database(localstorage)
function getUser (){
  const student =JSON.parse(localStorage.getItem("user"));
}


if (student){
  //check  if email and password match
  if(emailInput=== student.email && passwordInput=== student.password){
    alert("welcome!");
    //redirect to homepage or dashboard
    window.location.href ="./dashboard.html";
  } else {
    alert("invalid email or password,please try again")
  }
} else{
  alert("no account found pls register first")
}
})
