const littlebox = document.querySelector(".littlebox")
let x = 0
let y = 0
let radius = 210
let angle = 0

 let interval = setInterval(function (){
     x = 220 + radius * Math.cos(angle);
     y = 220 + radius * Math.sin(angle);
     littlebox.style.left = x + 'px';
     littlebox.style.top = y + 'px';
     angle += Math.PI/30;
     if (angle>=2 * Math.PI){
         angle = 0;
     }
 },1000);


let seconds  = 60;
let message   = document.getElementById('message')
let timerId = setInterval(() => {
    seconds -- ;
    if (seconds === 0){
        clearInterval(timerId)
        message.innerText = "Time Stop"
    } else {
        message.innerText = `TIMER ${seconds}sec`
    }
},1000)











