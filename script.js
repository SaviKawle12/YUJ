console.log("YUJ Website Loaded");

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("intro").style.opacity = "0";

setTimeout(function(){
document.getElementById("intro").style.display = "none";
},1000);

},4000);

});