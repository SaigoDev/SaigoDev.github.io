const traducciones = {
  es: {
    projects: "Proyectos"
  },
  cat: {
    projects: "Projectes"
  },
  en: {
    projects: "Projects"
  }
};

const selector = document.getElementById("language-selector");

selector.addEventListener("change", (e) => {
  const idioma = e.target.value;
  localStorage.setItem("idiomaSeleccionado", idioma); // Guarda idioma
  traducirPagina(idioma);
});

function traducirPagina(idioma) {
  const elementos = document.querySelectorAll("[data-i18n]");
  elementos.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = traducciones[idioma][key];
  });
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idiomaSeleccionado") || "es";
  selector.value = idiomaGuardado;
  traducirPagina(idiomaGuardado);
});