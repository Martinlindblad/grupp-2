document.getElementById("header").addEventListener("click", function(){
document.getElementById("menu2").classList.toggle("show");
});
document.getElementById("text1").addEventListener("click", function(){
document.getElementById("textmenu1").classList.toggle("show");
});
document.getElementById("text2").addEventListener("click", function(){
document.getElementById("textmenu2").classList.toggle("show");
});
document.getElementById("navbar").addEventListener("click", function(){
document.getElementById("menu3").classList.toggle("show");
});
document.getElementById("main").addEventListener("click", function(){
document.getElementById("menu4").classList.toggle("show");
});
document.getElementById("footer").addEventListener("click", function(){
document.getElementById("menu5").classList.toggle("show");
});
document.getElementById("text3").addEventListener("click", function(){
document.getElementById("mn-txt").classList.toggle("show");
});
document.getElementById("mn-hdl-txt").addEventListener("click", function(){
document.getElementById("mn-hdl-txt-men").classList.toggle("show");
});
document.getElementById("mn-hdl-fam").addEventListener("click", function(){
document.getElementById("mn-hdl-fam-rad").classList.toggle("show");
});
document.getElementById("mn-hdl-txt-sz").addEventListener("click", function(){
document.getElementById("mn-hdl-txt-sz-rad").classList.toggle("show");
});
document.getElementById("mn-pln-txt").addEventListener("click", function(){
document.getElementById("mn-pln-txt-fam").classList.toggle("show");
});
document.getElementById("mn-pln-fam").addEventListener("click", function(){
document.getElementById("mn-pln-fam-rad").classList.toggle("show");
});
document.getElementById("mn-pln-txt-sz").addEventListener("click", function(){
document.getElementById("mn-pln-txt-sz-rad").classList.toggle("show");
});
document.getElementById("hdr-txt-fam").addEventListener("click", function(){
    document.getElementById("hdr-txt-fam-rad").classList.toggle("show");
});
document.getElementById("hdr-txt-size").addEventListener("click", function(){
    document.getElementById("hdr-txt-sz-rad").classList.toggle("show");
});
document.getElementById("nav-txt-fam").addEventListener("click", function(){
    document.getElementById("nav-txt-fam-rad").classList.toggle("show");
});
document.getElementById("nav-txt-size").addEventListener("click", function(){
    document.getElementById("nav-txt-sz-rad").classList.toggle("show");
});
document.getElementById("text4").addEventListener("click", function(){
document.getElementById("ftr-txt").classList.toggle("show");
});
document.getElementById("ftr-txt-fam").addEventListener("click", function(){
document.getElementById("ftr-txt-fam-rad").classList.toggle("show");
});
document.getElementById("ftr-txt-size").addEventListener("click", function(){
document.getElementById("ftr-txt-sz-rad").classList.toggle("show");
});


//                              COLOR MENUS


document.getElementById("txt-color").addEventListener("click", function () {
    document.getElementById("colormenu1").classList.toggle("show");
});
document.getElementById("txt-nav").addEventListener("click", function () {
    document.getElementById("colormenu2").classList.toggle("show");
});

document.getElementById("mn-hdl-txt-cl").addEventListener("click", function () {
    document.getElementById("colormenu3").classList.toggle("show");
});
document.getElementById("mn-pln-txt-cl").addEventListener("click", function () {
    document.getElementById("colormenu9").classList.toggle("show");
});

document.getElementById("txt-footer").addEventListener("click", function () {
    document.getElementById("colormenu4").classList.toggle("show");
});
document.getElementById("bg-color-header").addEventListener("click", function () {
    document.getElementById("colormenu5").classList.toggle("show");
});

document.getElementById("bg-color-nav").addEventListener("click", function () {
    document.getElementById("colormenu6").classList.toggle("show");
});

document.getElementById("bg-color-main").addEventListener("click", function () {
    document.getElementById("colormenu7").classList.toggle("show");
});

document.getElementById("bg-color-footer").addEventListener("click", function () {
    document.getElementById("colormenu8").classList.toggle("show");
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
         // console.log("font-style:"+ event.target.value+";\n");
 }

 function updateFirst2(event) {
     let nav = document.querySelectorAll("nav a");
     for(let i = 0; i < nav.length; i++){
         nav[i].style.color = event.target.value;

     }


 }

 function updateFirst3(event) {
     let main = document.querySelector("main h2");
         main.style.color = event.target.value;

 }

 function updateFirst4(event) {
     let footer = document.querySelector("footer");
         footer.style.color = event.target.value;

 }

 function updateFirst5(event) {
     let bg_header = document.querySelector("header");
         bg_header.style.backgroundColor = event.target.value;

 }
 function updateFirst6(event) {
     let bg_nav = document.querySelector("nav");
         bg_nav.style.backgroundColor = event.target.value;

 }

 function updateFirst7(event) {
     let bg_main = document.querySelector("main");
         bg_main.style.backgroundColor = event.target.value;

 }

 function updateFirst8(event) {
     let bg_footer = document.querySelector("footer");
         bg_footer.style.backgroundColor = event.target.value;

 }
 function updateFirst9(event) {
     let color_text = document.querySelector("main p");
         color_text.style.color = event.target.value;

 }