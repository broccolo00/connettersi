
//var color = document.getElementById("colorpicker");
var canvas    = document.querySelector('canvas'),
ctx  = canvas.getContext('2d'),
beginPath = false;
val = 1 ;
var figura = 0;
x = false;
var mouseDown = 0;
var checkSpace = 0;
var red = 0;
var green = 0;
var blue = 0;
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight/*-((window.innerHeight*15)/100)*/;
var width = canvas.width;
var height = canvas.height;

// Draw the ellipse
/*ctx.beginPath();
ctx.ellipse(300, 300, 150, 150, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();*/



document.onmousedown = function() { 
    mouseDown+=1;
};

document.onmouseup = function() { 
    if(mouseDown!==0) mouseDown-=1;
};

function calcColor(xpos,ypos){
     red = (xpos*256)/width;
     blue = (ypos*256)/height;
     green = val;
     document.getElementById("redValue").innerHTML = red ;
     document.getElementById("greenValue").innerHTML = green ;
     document.getElementById("blueValue").innerHTML = blue ;
   
}


function disegna(){
//var colore = color.value;  

var x = event.clientX, y = event.clientY;
calcColor(x,y);
if(checkSpace>0){
ctx.beginPath();
ctx.arc(x, y, val, 0, 2 * Math.PI);
//ctx.strokeRect((x-(val/2)), (y-(val/2)), val, val);
ctx.strokeStyle = "rgb("+red+","+green+","+blue+")";
ctx.stroke();
    }
}

canvas.addEventListener('mousemove', function (event) {
     if(mouseDown){disegna();}
        

	
}, false); 
canvas.addEventListener("click", function (event){disegna();}, false); 

canvas.addEventListener("wheel", function (event){
  disegna();
    var y = event.deltaY;
  if(y<0)val+=2;
  else if(val>1)val-=2;
  else{}
  
  document.getElementById("deltay").innerHTML = val + "px";
});



document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32){
        if(checkSpace!==1)checkSpace += 1;
    }
    /* if (event.keyCode === 32) {
        document.body.style.backgroundColor = `rgb(256, 256, 256)`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        ctx.beginPath();
    // Do something
  }*/
}); 

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32){
        if(checkSpace!==0)checkSpace -= 1;
        document.body.style.backgroundColor = `rgb(256, 256, 256)`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        ctx.beginPath();
        }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 