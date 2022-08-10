function spanClick(){
     var obj=document.getElementById("details1");
     var att=obj.getAttribute("open1");
     if(att!="open1"){
         obj.setAttribute("open1","open1");
         }
     else{
         obj.removeAttribute("open1");
         }
     }
function spanClick(){
     var obj=document.getElementById("details2");
     var att=obj.getAttribute("open2");
     if(att!="open2"){
         obj.setAttribute("open2","open2");
         }
     else{
         obj.removeAttribute("open2");
         }
     }
