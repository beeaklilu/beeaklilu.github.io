"use strict";
window.onload = function () {

    
    let date = document.getElementById("date");
    
    function setTime() {
        let now = new Date();
        date.innerHTML =  now.getFullYear() + "-" + now.getMonth() + "-" +  now.getDate() + "-" +  now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
    }
    setInterval(setTime, 1000);
}