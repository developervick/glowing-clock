window.onload = mainClock()

function mainClock(){
    
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    console.log("clock", ss, mm, hh)

    secondHand(ss*6-90)
    minuteHand((mm*6)-90)
    hourHand(hh*30-90)
    setTimeout(()=>{
        mainClock()
    }, 1000)
}



function minuteHand(angle){
    let hand = document.querySelector("#minute");
    hand.style.rotate = `${angle}deg`;
}

function hourHand(angle){
    let hand = document.querySelector("#hour");
    hand.style.transform = `rotate(${angle}deg)`;
}

function secondHand(angle){
    let hand = document.querySelector("#second");
    hand.style.transform = `rotate(${angle}deg)`;
}

export default mainClock;