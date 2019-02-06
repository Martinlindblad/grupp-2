//________________Array för lagring av regler_____________________

let header = ["header{","}",];
console.log(header);
let nav = ["nav{","}"];
console.log(nav);
let main = ["main{","}"];
console.log(main);
let footer = ["footer{","}"];
console.log(footer);

// _______________________FontFamily_______________________________

document.getElementById("arial1").addEventListener('click', function(){
  document.querySelector("h1").style.fontFamily= "Arial";
  header.splice(1,0, "fontFamily: 'Arial';");
});
document.getElementById("times").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Times New Roman";
  header.splice(1,0, "fontFamily: 'Times New Roman';");
});
document.getElementById("verdana").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Verdana";
  header.splice(1,0, "fontFamily: 'Times New Roman';");
});
// ________________________Font Size______________________

document.getElementById("r1").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "1rem";
  header.splice(1,0, "fontSize: 1rem;");
});
document.getElementById("r2").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "2rem";
  header.splice(1,0, "fontSize: 2rem;");; //Innehåll
});
document.getElementById("r3").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "3rem";
  header.splice(1,0, "fontSize: 3rem;");
});
document.getElementById("r4").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "4rem";
  header.splice(1,0, "fontSize: 4rem;");
});
// __________________________Navbar FontFamily______________________________________
document.getElementById("arial2").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily= "Arial";
  }
  nav.splice(1,0, "fontFamily: 'Arial';");
});
document.getElementById("times2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily= "Times New Roman";
  }
  nav.splice(1,0, "fontFamily:'Times New Roman';"); //Innehåll
});
document.getElementById("verdana2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily= "Verdana";
  }
  nav.splice(1,0, "fontFamily:'Verdana';");
});
  

//_______________________Navbar size_________________________________
document.getElementById("s12px1").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "12px";
  }
  nav.splice(1,0, "fontSize: 12px;");
});
document.getElementById("s14px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "14px";
  }
  nav.splice(1,0, "fontSize: 14px;"); //Innehåll
});
document.getElementById("s16px1").addEventListener('click', function () {
  let a = document.querySelectorall("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "16px";
  }
  nav.splice(1,0, "fontSize: 16px;");
});
document.getElementById("s18px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "18px";
  }
  nav.splice(1,0, "fontSize: 18px;");
});

//_________________________Main__________________________________________


// _______________________FontFamily- Main_______________________________

document.getElementById("arial3").addEventListener('click', function(){
  document.querySelector("h2").style.fontFamily= "Arial";
  main.splice(1,0, "fontFamily: 'Arial';");
});
document.getElementById("times3").addEventListener('click', function () {
  document.querySelector("h2").style.fontFamily = "Times New Roman";
  main.splice(1,0, "fontFamily: 'Times New Roman';");
});
document.getElementById("verdana3").addEventListener('click', function () {
  document.querySelector("h2").style.fontFamily = "Verdana";
  main.splice(1,0, "fontFamily: 'Times New Roman';");
});
// ________________________Font Size______________________

document.getElementById("s26px2").addEventListener('click', function(){
  document.querySelector("h2").style.fontSize = "26px";
  main.splice(1,0, "fontSize: 26px;");
});
document.getElementById("s28px2").addEventListener('click', function () {
  document.querySelector("h2").style.fontSize = "28px";
  main.splice(1,0, "fontSize: 28px;");; //Innehåll
});
document.getElementById("s30px2").addEventListener('click', function(){
  document.querySelector("h2").style.fontSize = "30px";
  main.splice(1,0, "fontSize: 20px;");
});
document.getElementById("s32px2").addEventListener('click', function () {
  document.querySelector("h2").style.fontSize = "32px";
  main.splice(1,0, "fontSize: 32px;");
});

// _______________________Main <p>_________________________________

// _______________________FontFamily_______________________________

document.getElementById("arial4").addEventListener('click', function(){
  document.querySelector("main p").style.fontFamily= "Arial";
  main.splice(1,0, "fontFamily: 'Arial';");
});
document.getElementById("times4").addEventListener('click', function () {
  document.querySelector("main p").style.fontFamily = "Times New Roman";
  main.splice(1,0, "fontFamily: 'Times New Roman';");
});
document.getElementById("verdana4").addEventListener('click', function () {
  document.querySelector("main p").style.fontFamily = "Verdana";
  main.splice(1,0, "fontFamily: 'Times New Roman';");
});
// ________________________Font Size______________________

document.getElementById("s12px3").addEventListener('click', function(){
  document.querySelector("main p").style.fontSize = "12px";
  main.splice(1,0, "fontSize: 12px;");
});
document.getElementById("s14px3").addEventListener('click', function () {
  document.querySelector("main p").style.fontSize = "14px";
  main.splice(1,0, "fontSize: 14px;");; //Innehåll
});
document.getElementById("s16px3").addEventListener('click', function(){
  document.querySelector("main p").style.fontSize = "16px";
  main.splice(1,0, "fontSize: 16px;");
});
document.getElementById("s18px3").addEventListener('click', function () {
  document.querySelector("main p").style.fontSize = "18px";
  main.splice(1,0, "fontSize: 18px;");
});

//_______________________Footer______________________

// _______________________FontFamily_______________________________

document.getElementById("arial5").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontFamily= "Arial";
  header.splice(1,0, "fontFamily: 'Arial';");
});
document.getElementById("times5").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontFamily = "Times New Roman";
  header.splice(1,0, "fontFamily: 'Times New Roman';");
});
document.getElementById("verdana5").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontFamily = "Verdana";
  header.splice(1,0, "fontFamily: 'Times New Roman';");
});
// ________________________Font Size______________________

document.getElementById("s26px4").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontSize = "26px";
  header.splice(1,0, "fontSize: 26px;");
});
document.getElementById("s28px4").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontSize = "28px";
  header.splice(1,0, "fontSize: 28px;");; //Innehåll
});
document.getElementById("s30px4").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontSize = "30px";
  header.splice(1,0, "fontSize: 30px;");
});
document.getElementById("s32px4").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontSize = "32px";
  header.splice(1,0, "fontSize: 32px;");
});

//__________________Download function__________________________

let btn = document.getElementById("dwnld");
btn.addEventListener('click', function() {
  let ipt = header.join("");
  console.log(ipt);
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
  // htmlCreation(index);
}); 
