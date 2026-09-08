function mostrar(id){
  var el = document.getElementById(id);
  if(el.style.display === "block"){
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

function motivacao(){
  var frase = document.getElementById("frase");
  frase.innerHTML = "Não desista, você pode chegar nos seus objetivos! 💜";
  frase.style.display = "block";
}
