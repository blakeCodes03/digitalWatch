function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 1000);
  }
  startTime();

//   button clicking to activate watch
var showTime = document.getElementById('showTime')
showTime.onclick = function(){
    document.getElementById('time').classList.add('animated', 'fadeInRight');
    document.getElementById('time').classList.remove('digitalClock');
    const myTimeout = setTimeout(function() { /*to make time fade out right after 5 secs*/
      document.getElementById('time').classList.add('fade-out-right'); 
      myStopFunction();
    }, 5000);
    function myStopFunction() {
      clearTimeout(myTimeout);
    }
   
    
}
