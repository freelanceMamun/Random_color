

const randomBtn = document.querySelector(".radom_colorBtn");
const displyColor = document.querySelector(".display_color");
const hexInput = document.querySelector(".hex-input");
const RgbInput = document.querySelector(".RGB-Input");
const redValue = document.querySelector(".red-value");
const geenValu = document.querySelector(".green_value");
const bluevalue = document.querySelector(".blue-value");


randomBtn.addEventListener("click",randomColor)

function randomColor(){ //// Decimail number
 
  const {red,green,blue,} = hexColorRandom()
  let Red  = document.querySelector(".red_range");
  let Green = document.querySelector(".green_range");
  let Blue = document.querySelector(".blue_range");
   Red.value = red;
   Green.value = green;
   Blue.value = blue ;
   redValue.innerHTML = red;
   geenValu.innerHTML = green;
   bluevalue.innerHTML = blue ;
  let rgbColor = `rgb(${red},${green},${blue})`
  let hexColor =`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.toUpperCase()
  RgbInput.value = rgbColor ;
  hexInput.value = hexColor ;
  displyColor.style.background = hexColor ;

  
}
//// random hex color code

function hexColorRandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

     return{
         red,
         green,
         blue,
     }
}


hexInput.addEventListener("input",function(e){
    const  color = this.value;
     displyColor.style.background = color;
     const hex = color.slice(1);
     HexToDicimail(hex);
   
})



function HexToDicimail(hex){
     const red   = parseInt(hex.slice(0,2),16);
     const green = parseInt( hex.slice(2,4),16);
     const blue  =  parseInt( hex.slice(4),16);
     RgbInput.value =`rgb(${red},${green},${blue})`;
     let Red  = document.querySelector(".red_range");
     let Green = document.querySelector(".green_range");
     let Blue = document.querySelector(".blue_range");
     const redValue = document.querySelector(".red-value");
     const geenValu = document.querySelector(".green_value");
     const bluevalue = document.querySelector(".blue-value");

     redValue.innerHTML = red ;
     Red.value = red ;
     geenValu.innerHTML = green ;
     Green.value = green ;
     bluevalue.innerHTML = blue ;
     Blue.value =  blue ;

     
}


const allColer = document.querySelectorAll("#color");
 allColer.forEach((color)=>{
   color.addEventListener("input", function(){
    changeValue();
    myfunColor();
   })
 })


function myfunColor(){
    
    let Red  = document.querySelector(".red_range").value;
    let Green = document.querySelector(".green_range").value;
    let blue = document.querySelector(".blue_range").value;
    let rangColor = `rgb(${Red},${Green},${blue})`;
    RgbInput.value = rangColor;
    displyColor.style.background = rangColor;

    RangeToHEx({Red,Green,blue});
    
  
  }


function RangeToHEx({Red,Green,blue}){
     const hexRed  = Number(Red);
     const hexGreen = Number(Green);
     const hexBlue = Number(blue);
     let hexColor =  `#${hexRed.toString(16)}${hexGreen.toString(16)}${hexBlue.toString(16)}`.toUpperCase()    
     hexInput.value  = hexColor ;
       
}


function changeValue(){
  let Red  = document.querySelector(".red_range");
  let Green = document.querySelector(".green_range");
  let Blue = document.querySelector(".blue_range");
  const redValue = document.querySelector(".red-value");
  const geenValu = document.querySelector(".green_value");
  const bluevalue = document.querySelector(".blue-value");
  
    redValue.innerHTML = Red.value ;
    geenValu.innerHTML = Green.value;
    bluevalue.innerHTML = Blue.value;

}




 //////// Radio Checked and coloer code active function
const radio1 = document.querySelector(".radio1");
const radio = document.querySelector(".radio");
const  hexcodeActive = document.querySelector(".hexbox .input");
  const rgbCodeActivew = document.querySelector(".rgb-code .input");        
radio1.addEventListener("click",function(){
    if(radio1){
        radio.checked = false ;
        hexcodeActive.classList.add("active");
        rgbCodeActivew.classList.remove("active");
    }

})

radio.addEventListener("click",function(){
  if(radio){
    radio1.checked = false ;
     hexcodeActive.classList.remove("active");
     rgbCodeActivew.classList.add("active");
   }

})

///// colorcode copy function  
const copyColorCode =document.querySelector(".copy-colder");

copyColorCode.addEventListener("click",()=>{
        if(!hexcodeActive.classList.contains("active") && !rgbCodeActivew.classList.contains("active")){
           alert("Please Enter Hex or RGB Button Click ")
        }

        if(hexcodeActive.classList.contains("active")){
           hexInput.select();
           navigator.clipboard.writeText(hexInput.value)
        }

        if(rgbCodeActivew.classList.contains("active")){
          RgbInput.select();
          navigator.clipboard.writeText(RgbInput.value)
        }

})




