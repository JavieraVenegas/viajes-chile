$(function(){ //TODO LO QUE SE HAGA EN JQUERY TIENE QUE ESTAR ACA 


$(".cards").click(function(){
    $(".list-group").toggle()
})

$("#EnviarInfo").click(function(){
    alert("Correo enviado, Gracias por contactarnos :)")

})






})


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})