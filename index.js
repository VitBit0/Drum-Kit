//default data
let buttons= document.querySelectorAll(".drum");
const keys={"w":"tom-1","a":"tom-2","s":"tom-3","d":"tom-4","j":"snare","k":"crash","l":"kick-bass"}
//utility functios and eventlistener adder
function clickHandler(){
    player("sounds/"+keys[this.innerHTML]+".mp3")
}
function player(path){
    var audio=new Audio(path);
    audio.play();
}
for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click", clickHandler)
}
//keyboard input recivers
document.addEventListener("keydown",function(event){
    switch(event.key){
        case "w":
            player("sounds/"+keys["w"]+".mp3")
        break
        case "a":
            player("sounds/"+keys["a"]+".mp3")
        break
        case "s":
            player("sounds/"+keys["s"]+".mp3")
        break
        case "d":
            player("sounds/"+keys["d"]+".mp3")
        break
        case "j":
            player("sounds/"+keys["j"]+".mp3")
        break
        case "k":
            player("sounds/"+keys["k"]+".mp3")
        break
        case "l":
            player("sounds/"+keys["l"]+".mp3")
        break
        default:
            alert("Invalid key");
    }

})
document.querySelector(".cartel").addEventListener("click",function(){
    alert("ignora questo pulsante :)")
})
