document.addEventListener('DOMContentLoaded', function(){

    let newDate = new Date();
    let date = newDate.toString("HH");
    check();
    setInterval(function(){
        check();
    },60000);

    function check(){
        if(date >= "22" || date >= "00" && date < "07"){
            let el = document.createElement("div");
            el.className = "sleepNotif";
            document.querySelector(".app").appendChild(el);
            document.querySelector(".app .sleepNotif").textContent = "Time to sleep now";
        }
    }

},false);