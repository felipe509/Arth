document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const textContainer = document.getElementById("textContainer");
    const body = document.body;
  
    loader.addEventListener("animationend", function() {
      textContainer.innerText = "Artherapy Box";
      textContainer.style.opacity = "1";
  
      // Cambiar el fondo a blanco
      body.style.backgroundColor = "#000000";
  
      // Eliminar la animación de carga después de que aparezca el texto
      loader.style.animation = "none";
  
      setTimeout(function() {
        body.style.backgroundColor = "#000000";
        loader.style.display = "none";
        // Ocultar el texto después de 2 segundos
        setTimeout(function() {
          // Restaurar el fondo original
          textContainer.style.opacity = "0";
          // Eliminar el loader del DOM después de que el texto desaparezca
          window.location.href = "aprende.html"
        }, 1000);
      }, 0);
    });
  });