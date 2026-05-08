function mostrarmensaje() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

function mostrarmensajepersonal() {
    let mensaje = document.getElementById("mostrarmensajepersonal");
    mensaje.innerHTML = "Bienvenidos a mi página";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

// 🌙 Modo oscuro
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

// Detectar preferencia del sistema
if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
    }
}

// Mostrar botón al hacer scroll
window.onscroll = function() {
  const btn = document.getElementById("btnTop");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Subir suavemente al inicio
document.getElementById("btnTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
