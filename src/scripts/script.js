// Changes the language of the page
var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
  let id=check.checked;

  if(id==true){
    location.href="src/es/index.html";

  }else{
    location.href="../../index.html";
  }
}