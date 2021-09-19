



function countdown(){
    const newYears = 'december 4, 2021 00:00:00';
    const newYearsDate = new Date(newYears);

    const currentDate = new Date ();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    var d = Math.floor(totalSeconds / 3600 / 24);
    var h = Math.floor(totalSeconds / 3600) %24;
    var m =Math.floor(totalSeconds / 60) %60;
    var s = Math.floor(totalSeconds) %60;

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('mins').innerText = m;
    document.getElementById('seconds').innerText = s;
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


// 
// initial call 


setInterval(function (){countdown();}, 1000);


function theday(){

}
