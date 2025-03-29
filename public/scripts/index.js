document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // 1. Ver en la consola del navegador qué estás enviando
      console.log("Enviando credenciales:", { username, password });

      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });

        // 2. Ver la respuesta sin procesar
        console.log("Respuesta sin procesar:", response);

        // 3. Procesar la respuesta
        const data = await response.json();
        console.log("Data recibida:", data);

        if (data.isLogin) {
          sessionStorage.setItem("username", data.user[0].username);
          sessionStorage.setItem("id", data.user[0].user_id); 
          sessionStorage.setItem("name", data.user[0].username); 
          window.location.href = './pages/home.html';
        } else {
          document.getElementById('errorMessage').style.display = 'block';
        }
      } catch (error) {
        console.error("Error en la petición:", error);
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