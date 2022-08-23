generateUATTagName();

function generateUATTagName(){
  uatTagName =  new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getUTCDate() + "-" + new Date().getHours() + new Date().getMinutes();

  document.getElementById("uatTagName").innerText = uatTagName;
}