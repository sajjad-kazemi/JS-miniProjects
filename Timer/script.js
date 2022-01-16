var mySecond = 30;
var myMinute = 1;
var myHour = 0;
var timer = setInterval(function(){
    console.log(myHour + ' : ' + myMinute + ' : ' + mySecond);
    // if(mySecond === 0 && myMinute === 0 && myHour === 0){
        //     console.log("Timeout")
        // break;};
        if (mySecond === 0) {
            if (myMinute === 0) {
                if (myHour === 0) {
                    console.log('timeout!');
                    clearInterval(timer);
                } else if (myHour !== 0) {
                    myHour--;
                    myMinute = 60;
                    mySecond = 60;
                }
            } else if (myMinute !== 0) {
                mySecond = 60;
                myMinute--;
            }
        }
        mySecond--;
},1000);

// var myTimerHours = Number(prompt("enter hours:"));
// var myTimerMinutes = Number(prompt("enter minutes:"));
// var myTimerSeconds = Number(prompt("enter seconds:"));

// var myTimer = setInterval(function() {
//     console.log(myTimerHours + " : " + myTimerMinutes + " : " + myTimerSeconds);
//     if(myTimerSeconds === 0 && myTimerHours === 0 && myTimerMinutes === 0) {
//         clearTimeout(myTimer)
//         console.log("Timeout!")
//     }
//     if(myTimerSeconds == 0) {
//     myTimerSeconds = 60;
//     myTimerMinutes--;
//     }
//     if(myTimerMinutes < 0) {
//     myTimerMinutes = 59;
//     myTimerHours--;
//     }
//     myTimerSeconds--;
// }, 100);
