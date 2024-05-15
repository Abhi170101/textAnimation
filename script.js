function breakTheText(){
var h1=document.querySelector("h1")
var h1Text= h1.textContent

var splittedText= h1Text.split("")
var halfValue= splittedText.length/2

var clutter=""
splittedText.forEach(function(elem,index){
    if(index<halfValue){
        clutter += `<span class="beforeHalf">${elem}</span>`
    }
    else{
        clutter += `<span class="afterHalf">${elem}</span>`
    }
    
})

h1.innerHTML= clutter
}
breakTheText()

gsap.from("h1 .beforeHalf",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .afterHalf",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
})
