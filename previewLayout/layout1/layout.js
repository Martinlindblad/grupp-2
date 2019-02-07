// function toggleDiv(){
//     let layout = document.getElementById("myLayout");
//     if (layout.style.display === "none") {
//         layout.style.display = "block"; 

//     } else { 
//         layout.style.display = "none";
//     }
    
// }

// function toggleDivTwo(){
//     let layoutTwo = document.getElementById("myLayoutTwo");
//     if (layoutTwo.style.display === "none") {
//         layoutTwo.style.display = "block"; 
      
//     } else { 
//         layoutTwo.style.display = "none";
//     }
    
// }

// function toggleDivThree(){
//     let layoutThree = document.getElementById("myLayoutThree");
//     if (layoutThree.style.display === "none") {
//         layoutThree.style.display = "block"; 
//     } else { 
//         layoutThree.style.display = "none";
//     }
// }
// layouts.map((layout, index) => {toggleDiv === index ? layout.style.display = "block" : color1.style.backgroundColor = "black"})}



//    let button1 = document.getElementById("color1");
//    let button2 = document.getElementById("color2");
//    let button3 = document.getElementById("color3"); 
//    let buttons = [button1, button2, button3]  
//    buttons.map(buttons, index).addEventListener("click", function() {
//        const color = document.body.style.backgroundColor;

//     if(toggleDiv === index) {
//     layout.layout.style.display = "block"; 
//     layout.button.style.backgroundColor = "white"; 
//     }else{
//     layout.layout.style.display = "none"; 
//     layout.button.style.backgroundColor = "lightgrey"; 
//     }
// })}

// let layouts = [myLayout, myLayoutTwo, myLayoutThree];





function toggleDiv(toggleDiv){
    const myLayout = document.getElementById('myLayout');
    const myLayoutTwo = document.getElementById('myLayoutTwo');
    const myLayoutThree = document.getElementById('myLayoutThree');
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const color3 = document.getElementById('color3');
    let layouts = [{ layout: myLayout, button: color1 }, { layout: myLayoutTwo, button: color2 }, { layout: myLayoutThree, button: color3 }];
    layouts.map((layout, index) => {
        console.log(layout, index);
        if(toggleDiv === index) {
            layout.layout.style.display = "block"; 
            layout.button.style.backgroundColor = "white"; 
        }else{
            layout.layout.style.display = "none"; 
            layout.button.style.backgroundColor = "lightgrey"; 
        }
    })}
       
       
       
    