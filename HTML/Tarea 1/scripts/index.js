// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Validar el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe
  
        // Obtener valores de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Credenciales válidas (puedes cambiarlas o hacerlas dinámicas)
        const validUsername = 'admin';
        const validPassword = 'admin';
  
        // Validar credenciales
        if (username === validUsername && password === validPassword) {
          // Redirigir a la página de inicio
          window.location.href = './pages/home.html';
        } else {
          // Mostrar mensaje de error
          document.getElementById('errorMessage').style.display = 'block';
        }
      });
    }

    // Función para cambiar el color y agregar un fondo al párrafo
    function changeColor() {
        const parrafo = document.getElementById('miparrafo');
         if (parrafo) {
            parrafo.style.color = 'red'; // Cambiar el color del texto
            parrafo.style.backgroundColor = '#c3c6c2'; // Agregar un fondo gris claro
            parrafo.style.padding = '10px'; // Añadir un poco de padding para que se vea mejor
            parrafo.style.borderRadius = '5px'; // Bordes redondeados
            parrafo.style.width = 'fit-content'; // Limitar el fondo al contenido
        }
    }
  
    // Función para mostrar una alerta
    function showAlert() {
      alert('¡Botón clickeado!');
    }
  
    // Función para cambiar el texto de un párrafo
    function changeText() {
      const parrafo = document.getElementById('miparrafo');
      if (parrafo) {
        parrafo.textContent = '¡Texto cambiado con JavaScript!';
      }
    }
  
    // Función para resetear los valores iniciales
    function resetearValores() {
        const parrafo = document.getElementById('miparrafo');
        if (parrafo) {
      // Restablecer estilos y contenido
            parrafo.style.color = ''; // Color de texto inicial
            parrafo.style.backgroundColor = ''; // Fondo inicial
            parrafo.style.padding = ''; // Padding inicial
            parrafo.style.borderRadius = ''; // Bordes iniciales
            parrafo.style.display = ''; // Display inicial
            parrafo.textContent = 'Parrafo 2'; // Texto inicial
        }
    }

  // Asignar eventos a botones (si existen en la página)
  const botonCambiarColor = document.querySelector('.boton.cambiar-color');
  const botonMostrarAlerta = document.querySelector('.boton.mostrar-alerta');
  const botonCambiarTexto = document.querySelector('.boton.cambiar-texto');
  const botonResetear = document.querySelector('.boton.resetear');

  if (botonCambiarColor) {
    botonCambiarColor.addEventListener('click', changeColor);
  }
  if (botonMostrarAlerta) {
    botonMostrarAlerta.addEventListener('click', showAlert);
  }
  if (botonCambiarTexto) {
    botonCambiarTexto.addEventListener('click', changeText);
  }
  if (botonResetear) {
    botonResetear.addEventListener('click', resetearValores);
  }
});