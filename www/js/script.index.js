window.onload = () => {
    let app = document.querySelector(".app");
    let campfire = document.querySelector(".audiosrc .campfire");
    let sea = document.querySelector(".audiosrc .sea");
    let audio = document.getElementsByTagName("audio");
    let title = document.querySelector(".app .main .title");
    let bg = document.querySelector(".app .bg");
    let toolbar = document.querySelector(".toolbar");
    let toolbarbox = document.querySelector(".toolbarbox");
    let menuIcon = document.querySelector(".menu-icon");
    let menuOverLay = document.querySelector(".menu-overLay");
    let time = document.querySelector(".time");

    //Cur time

    function curTime() {
        let newDate = new Date();
        let date = newDate.toString("hh:mm tt");
        time.textContent = date;
    }
    //Init cut time
    curTime();

    setInterval( () => {
        curTime();
    },60000);

    //Stop the contextmenu menu
    app.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    //Pause the audio
    function pauseAudio(){
        var elements = document.getElementsByTagName('audio');
        for (var i=0; i<elements.length; i++) {
            let cn = elements[i];
            cn.pause();
        }
    }

    //Change the background imahe
    function chbg(url){
        bg.style.background = 'url('+url+') no-repeat center fixed';
        bg.style.backgroundSize = 'cover';

        //When after select the audio close the menu
        toolbarbox.classList.remove("open");
        menuOverLay.classList.remove("open");
    }

    //Play the right audio and change the background
    toolbar.addEventListener("click",()=>{
        let info = event.target || event.srcElement;
        let cn = info.className;
        pauseAudio();
        chbg("assets/img/"+cn+".jpg ")
        document.querySelector(".audiosrc ."+cn+"").play();
    });

    //When menu icon click when pop up the audio menu
    menuIcon.addEventListener("click", () => {
        toolbarbox.className += " open";
        menuOverLay.className += " open";
    });

    //Menu over lay click and close the menu
    menuOverLay.addEventListener("click", () => {
        toolbarbox.classList.remove("open");
        menuOverLay.classList.remove("open");
    });




};