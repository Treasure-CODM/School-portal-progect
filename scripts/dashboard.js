let user = JSON.parse(localStorage.getItem("user"));

let date = new Date();
let year = date.getFullYearI();
let month = date.getMonth();
let days = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();

function greetUser(){
  let day ='';
  if (days ===0){
    day="sunday";
  }else if (days ===1 ){
    day="monday"
  }else if (days ===2 ){
    day="tuesday"
  }else if (days ===3 ){
    day="wednesday"
  }else if (days ===4 ){
    day="thusday"
  }else if (days ===5 ){
    day="friday"
  }else if (days ===6 ){
    day="saturday"
  }


  let period =""
  if (hour<12){
    period ="Morning";
  }else if(hour >=12 && hour < 16){
    period ="Afternoon"
  }else if( hour >=  16) {
    period = "Evening"
  }

  let message = 
}