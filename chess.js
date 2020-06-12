function style1() {
    var a = document.getElementsByClassName('grey');
    var b = document.getElementsByClassName('white');
  
    for (var i = 0; i < 32; i++) {
      a[i].style.backgroundColor = 'grey';
      b[i].style.backgroundColor = 'pink';
    }
    document.getElementById("top").style.backgroundColor = "grey";
    document.getElementById("bottom").style.backgroundColor = "grey";
    document.getElementById("left").style.backgroundColor = "grey";
    document.getElementById("right").style.backgroundColor = "grey";

}
function style2() {
    var a = document.getElementsByClassName('grey');
    var b = document.getElementsByClassName('white');
  
    for (var i = 0; i < 32; i++) {
      a[i].style.backgroundColor = 'black';
      b[i].style.backgroundColor = 'white';
    }
    document.getElementById("top").style.backgroundColor = "grey";
    document.getElementById("bottom").style.backgroundColor = "grey";
    document.getElementById("left").style.backgroundColor = "grey";
    document.getElementById("right").style.backgroundColor = "grey";
}
function style3() {
    try{0
        var x = 1
        if(x == 0){
            throw "dxdddxd"
        }
        else{
            throw "Zhanelya is the best))"        
         }
 }
 catch(error){
     alert(error);
 }
 finally{
     alert("Hello,Student, everything will be ok!");
 }
}

function style4() {
    var a = document.getElementsByClassName('grey');
    var b = document.getElementsByClassName('white');
     
  
    for (var i = 0; i < 32; i++) {
      a[i].style.backgroundColor = 'black';
      b[i].style.backgroundColor = 'pink';
    }
    document.getElementById("top").style.backgroundColor = "brown";
    document.getElementById("bottom").style.backgroundColor = "brown";
    document.getElementById("left").style.backgroundColor = "brown";
    document.getElementById("right").style.backgroundColor = "brown";
}
function style5() {
    try{
           var x = 1
           if(x == 0){
               throw "dxdddxd"
           }
           else{
               throw "mr Talgat give me extra points))"        
            }
    }
    catch(error){
        alert(error);
    }
    finally{
        alert("Hello, mr. Talgat give me 20 points for the progress 9 ))");
    }
}
function rotate(){
    var top = document.querySelector(".top");
	var left = document.querySelector(".ll");
    var right = document.querySelector(".rl");
    var bottom = document.querySelector(".bottom");
    const styler = window.getComputedStyle(top);
    
	if(styler.getPropertyValue('flex-direction') == "row"){
		top.style.flexDirection = "row-reverse";
		bottom.style.flexDirection = "row-reverse";
		left.style.flexDirection = "column-reverse";
		right.style.flexDirection = "column-reverse";
    }
		else{
				top.style.flexDirection = "row";
				bottom.style.flexDirection = "row";
				left.style.flexDirection = "column";
				right.style.flexDirection = "column";
			}			
        }

        function rotate2(){
            var a = document.getElementById("Player1");
            var b = document.getElementById("Player2");
            var aa;
         if ((a.innerHTML == "Player 1") && (b.innerHTML == "Player 2") ){
           a.innerHTML = "Player 2";
           b.innerHTML = "Player 1";        
         }
         else{
           a.innerHTML = "Player 1";
           b.innerHTML = "Player 2";

         }
        }	
         function rotate3() {
            try{
                var f = document.getElementById("countdown1");
                var ff = document.getElementById("countdown2");
                   if(f.innerHTML="5:00"){
                       throw "dxdddxd"
                   }
                   else if (f.innerHTML="00:00"){
                       throw "Game is over"        
                    }
            }
            catch(error){
                alert(error);
            }
            finally{
                alert("Palyer1 win");
            }
        }
        
        
    var first = 0;
    var c;
    var d;
    var second = 0;

  function countdown() {
    second = 1;
    if (first == 1){
        second = 0;
        clearTimeout(d);
    }
    var timer = document.getElementById("timer");
    var time = timer.innerHTML;
    var t2 = time.split(":");
    var min = t2[0];
    var sec = t2[1];
    if (sec == 0) {
      if (min == 0) {
          alert("time is over");   
          return;
      }
      min--;
      if (min < 10) min = "0" + min;
      sec = 59;
    }
    else sec--;
    if (sec < 10) sec = "0" + s;
    document.getElementById("timer").innerHTML = min+":"+sec;
    c = setTimeout(countdown, 1000);
  }


    function countdown2() {
        first = 1;
    if (second == 1){
        first = 0;
        clearTimeout(с);
    }
    var timer2 = document.getElementById("timer2");
    var time =timer2.innerHTML;
    var t2 = time.split(":");
    var min = t2[0];
    var sec = t2[1];
    if (sec == 0) {
      if (min == 0) {
          alert("Time is over");
          return;
      }
      min--;
      if (min < 10) min = "0" + min;
      sec = 59;
    }
    else sec--;
    if (sec < 10) sec = "0" + sec;
    document.getElementById("timer2").innerHTML = min+":"+sec;
    d = setTimeout(countdown2, 1000);
  }

