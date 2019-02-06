//________________Array för lagring av regler_____________________

let header = ["header{\n","","}",];
console.log(header);
let nav = ["\nnav{\n","}"];
console.log(nav);
let nav_a = ["\nnav a{\n","}"];
console.log(nav_a);
let main = ["\nmain{\n","}"];
console.log(main);
let main_h2 = ["\nmain h2{\n","}"];
console.log(main_h2);
let main_p = ["\nmain p{\n","}"];
console.log(main_p);
let footer = ["\nfooter{\n","}"];
console.log(footer);

// _______________________font-family_______________________________

document.getElementById("arial1").addEventListener('click', function(){
document.querySelector("h1").style.fontFamily = "Arial";
header.splice(1,0, "\tfont-family: 'Arial';\n");
});
document.getElementById("times").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Times New Roman";
  header.splice(1,0, "\tfont-family: 'Times New Roman';\n");
});
document.getElementById("verdana").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Verdana";
  header.splice(1,0, "\tfont-family: 'Verdana';\n");
});
// ________________________Font Size______________________

document.getElementById("r1").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "1rem";
  header.splice(1,0, "\tfont-size: 1rem;\n");
});
document.getElementById("r2").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "2rem";
  header.splice(1,0, "\tfont-size: 2rem;\n");; //Innehåll
});
document.getElementById("r3").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "3rem";
  header.splice(1,0, "\tfont-size: 3rem;\n");
});
document.getElementById("r4").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "4rem";
  header.splice(1,0, "\tfont-size: 4rem;\n");
});
// __________________________Navbar font-family______________________________________
document.getElementById("arial2").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Arial";
  }
  nav.splice(1,0, "\tfont-family: 'Arial';\n");
});
document.getElementById("times2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Times New Roman";
  }
  nav.splice(1,0, "\tfont-family:'Times New Roman';\n"); //Innehåll
});
document.getElementById("verdana2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Verdana";
  }
  nav.splice(1,0, "\tfont-family:'Verdana';\n");
});
  

//_______________________Navbar size_________________________________
document.getElementById("s12px1").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "12px";
  }
  nav.splice(1,0, "\tfont-size: 12px;\n");
});
document.getElementById("s14px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "14px";
  }
  nav.splice(1,0, "\tfont-size: 14px;\n"); //Innehåll
});
document.getElementById("s16px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "16px";
  }
  nav.splice(1,0, "\tfont-size: 16px;\n");
});
document.getElementById("s18px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "18px";
  }
  nav.splice(1,0, "\tfont-size: 18px;\n");
});

//_________________________Main__________________________________________


// _______________________font-family- Main_______________________________

document.getElementById("arial3").addEventListener('click', function(){
  document.querySelector("h2").style.fontFamily= "Arial";
  main_h2.splice(1,0, "\tfont-family: 'Arial';\n");
});
document.getElementById("times3").addEventListener('click', function () {
  document.querySelector("h2").style.fontFamily = "Times New Roman";
  main_h2.splice(1,0, "\tfont-family: 'Times New Roman';\n");
});
document.getElementById("verdana3").addEventListener('click', function () {
  document.querySelector("h2").style.fontFamily = "Verdana";
  main_h2.splice(1,0, "\tfont-family: 'Verdana';\n");
});
// ________________________Font Size - Main______________________

document.getElementById("s26px2").addEventListener('click', function(){
  document.querySelector("h2").style.fontSize = "26px";
  main_h2.splice(1,0, "\tfont-size: 26px;\n");
});
document.getElementById("s28px2").addEventListener('click', function () {
  document.querySelector("h2").style.fontSize = "28px";
  main_h2.splice(1,0, "\tfont-size: 28px;\n");; //Innehåll
});
document.getElementById("s30px2").addEventListener('click', function(){
  document.querySelector("h2").style.fontSize = "30px";
  main_h2.splice(1,0, "\tfont-size: 30px;\n");
});
document.getElementById("s32px2").addEventListener('click', function () {
  document.querySelector("h2").style.fontSize = "32px";
  main_h2.splice(1,0, "\tfont-size: 32px;\n");
});

// _______________________Main <p>_________________________________

// _______________________font-family_______________________________

document.getElementById("arial4").addEventListener('click', function(){
  document.querySelector("main p").style.fontFamily= "Arial";
  main_p.splice(1,0, "\tfont-family: 'Arial';\n");
});
document.getElementById("times4").addEventListener('click', function () {
  document.querySelector("main p").style.fontFamily = "Times New Roman";
  main_p.splice(1,0, "\tfont-family: 'Times New Roman';\n");
});
document.getElementById("verdana4").addEventListener('click', function () {
  document.querySelector("main p").style.fontFamily = "Verdana";
  main_p.splice(1,0, "\tfont-family: 'Verdana';\n");
});
// ________________________Font Size______________________

document.getElementById("s12px3").addEventListener('click', function(){
  document.querySelector("main p").style.fontSize = "12px";
  main_p.splice(1,0, "\tfont-size: 12px;\n");
});
document.getElementById("s14px3").addEventListener('click', function () {
  document.querySelector("main p").style.fontSize = "14px";
  main_p.splice(1,0, "\tfont-size: 14px;\n");; //Innehåll
});
document.getElementById("s16px3").addEventListener('click', function(){
  document.querySelector("main p").style.fontSize = "16px";
  main_p.splice(1,0, "\tfont-size: 16px;\n");
});
document.getElementById("s18px3").addEventListener('click', function () {
  document.querySelector("main p").style.fontSize = "18px";
  main_p.splice(1,0, "\tfont-size: 18px;\n");
});

//_______________________Footer______________________

// _______________________font-family_______________________________

document.getElementById("arial5").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontFamily= "Arial";
  footer.splice(1,0, "\tfont-family: 'Arial';\n");
});
document.getElementById("times5").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontFamily = "Times New Roman";
  footer.splice(1,0, "\tfont-family: 'Times New Roman';\n");
});
document.getElementById("verdana5").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontFamily = "Verdana";
  footer.splice(1,0, "\tfont-family: 'Verdana';\n");
});
// ________________________Font Size______________________

document.getElementById("s26px4").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontSize = "26px";
  footer.splice(1,0, "\tfont-size: 26px;\n");
});
document.getElementById("s28px4").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontSize = "28px";
  footer.splice(1,0, "\tfont-size: 28px;\n");; //Innehåll
});
document.getElementById("s30px4").addEventListener('click', function(){
  document.querySelector("footer h2").style.fontSize = "30px";
  footer.splice(1,0, "\tfont-size: 30px;\n");
});
document.getElementById("s32px4").addEventListener('click', function () {
  document.querySelector("footer h2").style.fontSize = "32px";
  footer.splice(1,0, "\tfont-size: 32px;\n");
});


                                    /*color*/
let color;
let color2;
let color3;
let color4;
let color_bg_header;
let color_bg_nav;
let color_bg_main;
let color_bg_footer;
let color5;
                                   
                                   
let defaultColor = "#ffffff";
                                   
window.addEventListener("load", start, false);
window.addEventListener("load", start2, false);
window.addEventListener("load", start3, false);
window.addEventListener("load", start4, false);
window.addEventListener("load", start5, false);
window.addEventListener("load", start6, false);
window.addEventListener("load", start7, false);
window.addEventListener("load", start8, false);
window.addEventListener("load", start9, false);
                                   
function start() {
color = document.querySelector("#color_h1");
color.value = defaultColor;
color.addEventListener("input", updateFirst, false);
color.select(); // Om webbläsare inte har stöd för colorpicker
}
function start2() {
    color2 = document.querySelector("#color_nav");
    color2.value = defaultColor;
    color2.addEventListener("input", updateFirst2, false);
    color2.select();
}

function start3() {
    color3 = document.querySelector("#color_main");
    color3.value = defaultColor;
    color3.addEventListener("input", updateFirst3, false);
    color3.select();

}
                                   

function start4() {

    color4 = document.querySelector("#color_footer");
    color4.value = defaultColor;
    color4.addEventListener("input", updateFirst4, false);
    color4.select();

}

function start5() {

    color_bg_header = document.querySelector("#bg_header");
    color_bg_header.value = defaultColor;
    color_bg_header.addEventListener("input", updateFirst5, false);
    color_bg_header.select();

}

function start6() {

    color_bg_nav = document.querySelector("#bg_nav");
    color_bg_nav.value = defaultColor;
    color_bg_nav.addEventListener("input", updateFirst6, false);
    color_bg_nav.select();

}

function start7() {

    color_bg_main = document.querySelector("#bg_main");
    color_bg_main.value = defaultColor;
    color_bg_main.addEventListener("input", updateFirst7, false);
    color_bg_main.select();

}
function start8() {                                 
color_bg_footer = document.querySelector("#bg_footer");
color_bg_footer.value = defaultColor;
color_bg_footer.addEventListener("input", updateFirst8, false);
color_bg_footer.select();                               
}

function start9() {                                 
color5 = document.querySelector("#color_text");
color5.value = defaultColor;
color5.addEventListener("input", updateFirst9, false);
color5.select();                                
}
                                    
                                   
function updateFirst(event) {
let h1 = document.querySelector("h1");
h1.style.color = event.target.value;
header.splice(1,0,"\tcolor:"+ event.target.value+";\n");
}
                                   
function updateFirst2(event) {
let nav = document.querySelectorAll("nav a");
for(let i = 0; i < nav.length; i++){
nav[i].style.color = event.target.value;
}                                 
nav_a.splice(1,0,"\tcolor:"+event.target.value+";\n");                               
}
                                   
function updateFirst3(event) {
let main = document.querySelector("main h2");
main.style.color = event.target.value;
main_h2.splice(1,0,"\tcolor:"+ event.target.value+";\n");      
}
                                   
function updateFirst4(event) {
let foter = document.querySelector("footer");
foter.style.color = event.target.value;
footer.splice(1,0,"\tcolor:"+event.target.value+";\n");
}
                                   
function updateFirst5(event) {
let bg_header = document.querySelector("header");
bg_header.style.backgroundColor = event.target.value;
header.splice(1,0,"\tbackground-color:"+event.target.value+";\n");                                
}

function updateFirst6(event) {
let bg_nav = document.querySelector("nav");
bg_nav.style.backgroundColor = event.target.value;
nav.splice(1,0,"\tbackground-color:"+event.target.value+";\n");                                   
}
                                   
function updateFirst7(event) {
let bg_main = document.querySelector("main");
bg_main.style.backgroundColor = event.target.value;
main.splice(1,0,"\tbackground-color:"+event.target.value+";\n"); 
}
                                   
function updateFirst8(event) {
let bg_footer = document.querySelector("footer");
bg_footer.style.backgroundColor = event.target.value;
footer.splice(1,0,"\tbackground-color:"+event.target.value+";\n"); 
}
function updateFirst9(event) {
let color_text = document.querySelector("main p");
color_text.style.color = event.target.value;
main_p.splice(1,0,"\tcolor:"+event.target.value+";\n");
}




//__________________Download function__________________________

let btn = document.getElementById("dwnld");
btn.addEventListener('click', function() {
  let ipt = header.concat(nav,nav_a,main,main_h2,main_p,footer).join("");
  console.log(ipt);
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
});

// function htmlCreation() {
//   let i = document.getElementsByClassName("cd-fixed-bg cd-bg-1").value
//   console.log(i);
//   let file2 = new Blob([i], {type: "text/html; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
//   let a = document.getElementById("a");
//   a.href = URL.createObjectURL(file2); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
//   a.download = "index.html"; // "style.css"
// };