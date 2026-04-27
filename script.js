function mostrarmensaje() {
    let mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="cuida y protegea los animales";
    mensaje.style.display="block";
}
    setTimeout(()=> {
        mensaje.style.opacity="1";
        mensaje.style.transform="translate y(o)" ;
    } ,50);

function mostrarmensajepersonal() {
    let mensaje=document.getElementById("mostrarmensajepersonal");
    mensaje.innerHTML="Bienvenidos a mi pagina";
    mensaje.style.display="block";
}
    setTimeout(()=> {
        mensaje.style.opacity="1";
        mensaje.style.transform="translate y(o)" ;
    } ,50);



 
<script>
const button = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
</script>

