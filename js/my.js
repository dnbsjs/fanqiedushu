var coinNumObj = document.getElementById("coinNum");
let coinNum = 0;
try {
    coinNum = Number(localStorage.getItem("coin"));
}
catch {
    
}
coinNumObj.innerHTML = coinNum;