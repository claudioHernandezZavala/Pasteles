const parallax= document.getElementById("parallax2-conocenos");

window.addEventListener("scroll",function(){
let offset = this.window.pageYOffset;
parallax.style.backgroundPositionY=offset*0.7+'px';

});