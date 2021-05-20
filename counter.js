document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("tot").innerHTML=+document.getElementById("tot").innerHTML + +1;
});
document.getElementById("minus").addEventListener("click", function(){
    document.getElementById("tot").innerHTML-=1;
});
document.getElementById("reset").addEventListener("click", function(){
    if(confirm("Sei sicuri di resettare?")){
        document.getElementById("tot").innerHTML=0;
    }
});
document.getElementById("blu").addEventListener("click", function(){
    document.body.style.background="#0000ff";
});
document.getElementById("giallo").addEventListener("click", function(){
    document.body.style.background="#b7c408";
});
document.getElementById("grigio").addEventListener("click", function(){
    document.body.style.background="#808080";
});
document.getElementById("verde").addEventListener("click", function(){
    document.body.style.background="#4caf50";
});
document.getElementById("fantasy").addEventListener("click", function(){
    document.getElementById("tot").style.fontFamily="fantasy";
});
document.getElementById("serif").addEventListener("click", function(){
    document.getElementById("tot").style.fontFamily="serif";
});
document.getElementById("franklin").addEventListener("click", function(){
    document.getElementById("tot").style.fontFamily="Franklin Gothic";
});
document.getElementById("courier").addEventListener("click", function(){
    document.getElementById("tot").style.fontFamily="Courier";
});
var coll=document.getElementsByClassName("collapsible");
var i=i;
for (i=0; i<coll.length; i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var content= this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        } else{
            content.style.display="block";
        }
    });
};
document.getElementById("chiusura").addEventListener("click", function(){
    document.getElementById("content").style.display="none";
});