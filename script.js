function setValue(value){
  localStorage.setItem("currentValue", value.toString());
}

function reDirect(){
  const currentValue = localStorage.getItem("currentValue");
  if (currentValue) {
    window.location.href = './thanks.html';
  } else {
    alert('Please choose rating')
  }
}