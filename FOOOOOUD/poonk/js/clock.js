const clock=document.querySelector("#clock");


function getClock(){
    const date=new Date();
    const Hours=String(date.getHours()).padStart(2,"0");
    const Minutes=String(date.getMinutes()).padStart(2,"0");
    const Seconds=String(date.getSeconds()).padStart(2,"0");

    if (Number(Hours)>=12){
        clock.innerText=`PM ${Hours}:${Minutes}:${Seconds}`;
        
    }
    else{
        clock.innerText=`AM ${Hours}:${Minutes}:${Seconds}`;
        
    }

    }
    getClock();
    setInterval(getClock,1000);



