
let b = ["body{"," }"];
console.log(b);
console.log(b.join(""));

document.getElementById("redbg").addEventListener('click', function(){
  document.body.style.backgroundColor = "red";
  b.splice(1,0, "background-color: red;\n");
  return document.getElementById("text_val").value = "background-color: red;\n";//Innehåll
});
document.getElementById("verdana").addEventListener('click', function () {
  document.body.style.fontFamily = "Verdana";
  b.splice(1,0, "font-family: 'Verdana';\n");
  return document.getElementById("text_val").value = "font-family: 'Verdana';\n"; //Innehåll
});
document.getElementById("fontsize").addEventListener('click', function () {
  document.body.style.fontSize = "3rem";
  b.splice(1,0, "font-size: 3rem;\n");
  return document.getElementById("text_val").value ="font-size: 3rem;\n";
});

let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
  // let ipt = document.getElementById("text_val").value;
  let ipt = b.join("");
  console.log(ipt);
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
}); 
