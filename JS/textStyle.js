
function ChangeFont(f){
    var list = document.getElementsByClassName("font");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.fontFamily=f;
        }
        
    }
}

function ChangeAlign(a){
    var list = document.getElementsByClassName("align");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.textAlign=a;
        }
        
    }
}
function ChangeHeight(l){
    var list = document.getElementsByClassName("lineh");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.lineHeight=l;
        }
     
    }
}
function ChangeLSpace(linspace){
    var list=document.getElementsByClassName("lines");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.letterSpacing =linspace;
        }
     
    }
}
function ChangeIndent(indent){
    var list=document.getElementsByClassName("indent");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.textIndent =indent;
        }
     
    }
}
function ChangeTransform(transform){
    var list=document.getElementsByClassName("transform");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.textTransform =transform;
        }
     
    }
}
function ChangeDecorate(decorate){
    var list=document.getElementsByClassName("decorate");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.textDecoration =decorate;
        }
     
    }
}
function ChangeBorder(border){
    var list=document.getElementsByClassName("border");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.border =border;
        }
     
    }
}
function ChangeBorderColor(bcolor){
    var list=document.getElementsByClassName("border");
    var p=document.getElementById("PAR");
    for (var i = 0; i < list.length; i++) {
        if(list[i].checked){
            p.style.borderColor  =bcolor;
        }
     
    }
}