document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("main-content");

    // Escucha el evento clic en el enlace "Inicio"
    document.querySelector('nav ul li a[href="#"]').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado de la navegación

        // Usa fetch para obtener el contenido de "Inicio.html"
        fetch('Inicio.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Inserta el contenido de "Inicio.html" en la sección principal
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});
