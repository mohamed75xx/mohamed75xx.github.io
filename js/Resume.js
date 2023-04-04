let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let d3 = document.getElementById("d3");
let p3 = document.getElementById("p3");
let d4 = document.getElementById("d4");
let p4 = document.getElementById("p4");
let d5 = document.getElementById("d5");
let p5 = document.getElementById("p5");



d1.onmouseover  = ED;
function ED(){
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
  p5.style.display = "none";
}

d2.onmouseover  = WK;
function WK(){
  p1.style.display = "none",
  p2.style.display = "block",
  p3.style.display = "none",
  p4.style.display = "none",
  p5.style.display = "none"
}


d3.onmouseover = PS;
function PS(){
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "block";
  p4.style.display = "none";
  p5.style.display = "none";
}



d4.onmouseover = PR;
function PR(){
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "block";
  p5.style.display = "none";
}


d5.onmouseover = IN;
function IN(){
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
  p5.style.display = "block";
}
