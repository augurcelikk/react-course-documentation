const btnStopTimeoutEl = document.getElementById("btn-stop-timeout");

btnStopTimeoutEl.addEventListener("click", handleStopTimeout);

// *** setTimeout
const timeout1 = setTimeout(handleTimeout, 5000);

function handleTimeout() {
  console.log("5000 ms sonra merhaba");
}

function handleStopTimeout() {
  clearTimeout(timeout1);
  console.log("timeout1 durduruludu");
}



let myVal;

setTimeout( function(){
    myVal = 8;
    console.log(myVal);

}, 6000 );


console.log(myVal);


// *** setInterval


const timer1 = setInterval( handleTimer, 500  );


function handleTimer(){

    console.log("Time is ticking... Every 500ms");

}


const btnStopInterval = document.getElementById("btn-stop-timeinterval");

btnStopInterval.addEventListener(  "click", ()=>{
    clearInterval(timer1);
}  )