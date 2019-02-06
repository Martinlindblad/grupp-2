// let body = ["body{","background-color: red;","font-size: 3rem;"," }","< >"];
// console.log(body);
// console.log(body.join(""));

document.getElementById("arial1").addEventListener('click', function(){
  document.querySelector("h1").style.fontFamily= "Arial";
  return document.getElementById("text_val").value = "h1{fontFamily: 'Arial';}";//Innehåll
});
document.getElementById("times").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Times New Roman";
  return document.getElementById("text_val").value = "h1{fontFamily: 'Times New Roman';}"; //Innehåll
});
document.getElementById("verdana").addEventListener('click', function () {
  document.querySelector("h1").style.fontFamily = "Verdana";
  return document.getElementById("text_val").value ="h1{fontFamily: 'Verdana';}";
});

// ________________________Font Size______________________

document.getElementById("r1").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "1rem";
  return document.getElementById("text_val").value = "h1{fontSize: 1rem;}";//Innehåll
});
document.getElementById("r2").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "2rem";
  return document.getElementById("text_val").value = "h1{fontSize: 2rem;}"; //Innehåll
});
document.getElementById("r3").addEventListener('click', function(){
  document.querySelector("h1").style.fontSize = "3rem";
  return document.getElementById("text_val").value = "h1{fontSize: 3rem;}";//Innehåll
});
document.getElementById("r4").addEventListener('click', function () {
  document.querySelector("h1").style.fontSize = "4rem";
  return document.getElementById("text_val").value = "h1{fontSize: 4rem;}"; //Innehåll
});



let btn = document.getElementById("dwnld");
btn.addEventListener('click', function() {
  let ipt = document.getElementById("text_val").value;
  console.log(ipt);
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
  // htmlCreation(index);
}); 
// function htmlCreation(index) {
//   let file2 = new Blob([index],{ type: "text/html; charset=utf-8}"});
//   let a = document.getElementById("a");
//   a.href = URL.createObjectURL(file2); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
//   a.download = "index.html"; 
// };

//(innehåll, "namn", "type")
// let index = "<p>Lorem ipsum</p>";