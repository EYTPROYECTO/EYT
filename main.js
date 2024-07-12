// main.js

function redirectToGeneral(index) {
    // La función recibe el índice del botón presionado
    // Dependiendo del índice, se redirecciona a la sección correspondiente
    switch (index) {
        case 0:
            window.location.href = "#general1";
            break;
        case 1:
            window.location.href = "#general2";
            break;
        case 2:
            window.location.href = "#general3";
            break;
        case 3:
            window.location.href = "#general4";
            break;
        case 4:
            window.location.href = "#general5";
            break;
        case 5:
            window.location.href = "#general6";
            break;
        // Agrega más casos según sea necesario
    }
} 

// Función para agregar la animación al mostrar una sección
function addZoomAnimation(element) {
    element.classList.add('zoom-in-down');
}

// Función para quitar la animación al ocultar una sección
function removeZoomAnimation(element) {
    element.classList.remove('zoom-in-down');
}

// Función para redireccionar y mostrar una sección específica
function redirectToGeneral(index) {
    var lastDeltaY = 0; // Variable para mantener el seguimiento del último cambio de desplazamiento

    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.general');
    sections.forEach(function(section) {
        section.classList.remove('active');
        removeZoomAnimation(section); // Eliminar animación al ocultar
    });

    // Mostrar la sección correspondiente
    var selectedSection = document.getElementById('general' + (index + 1));
    if (selectedSection) {
        selectedSection.classList.add('active');
        addZoomAnimation(selectedSection); // Aplicar animación al mostrar
        
        // Calcular la posición de la sección
        var targetY = selectedSection.getBoundingClientRect().top + window.pageYOffset;
        var startY = window.pageYOffset;
        var distance = Math.abs(targetY - startY);
        var duration = 1000; // Duración de la animación en milisegundos
        var startTime = null;

        // Función para animar el desplazamiento
        function scrollToSection(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;

            var ease = progress / duration;
            ease = ease > 1 ? 1 : ease;
            ease = 1 - Math.pow(1 - ease, 3);

            var deltaY = distance * ease;
            var deltaYRemaining = deltaY - lastDeltaY;
            lastDeltaY = deltaY;

            window.scrollBy(0, deltaYRemaining); // Desplazar la ventana

            if (progress < duration) {
                requestAnimationFrame(scrollToSection); // Continuar la animación
            }
        }

        // Iniciar el desplazamiento animado
        requestAnimationFrame(scrollToSection);
    }
}


function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}




    document.addEventListener('DOMContentLoaded', () => {
        const cartCounter = document.querySelector('.cart-counter');
        let cartCount = 0;

        // Función para simular la adición de un producto al carrito
        function addToCart() {
            cartCount += 1;
            cartCounter.textContent = cartCount;
        }

        // Añade un evento para el botón de compra
        document.getElementById('buy-button').addEventListener('click', (e) => {
            e.preventDefault();
            addToCart();
        });
    });



document.addEventListener('DOMContentLoaded', () => {
    const cartCounter = document.querySelector('.cart-counter');
    let cartCount = 0;

    // Simular la adición de un producto al carrito
    function addToCart() {
        cartCount += 1;
        cartCounter.textContent = cartCount;
    }

    // Añade un evento para simular la adición al carrito (debes cambiar esto según tu lógica)
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        addToCart();
    });
});







function zoomIn(element) {
    element.style.transform = "scale(1.1)";
    const button = element.querySelector('.services1');
    if (button) {
        button.style.transform = "scale(1.1)";
    }
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
    const button = element.querySelector('.services1');
    if (button) {
        button.style.transform = "scale(1)";
    }
}

function zoomIn(element) {
    element.style.transform = "scale(1.05)";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = button.getAttribute("data-id");
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        // Aquí puedes agregar la lógica para añadir el producto al carrito
        console.log("Producto añadido al carrito:", productId);
        // Por ejemplo, podrías enviar una solicitud AJAX al servidor para añadir el producto al carrito
    }
});

document.getElementById("ver-productos").addEventListener("click", function() {
    window.location.href = "#todos-los-productos"; // Cambia esto al ID de la sección de todos los productos
});

function consultarWhatsapp() {
    const phone = "+51936004651"; // Reemplaza "tu-número-de-WhatsApp" con tu número
    const url = `https://wa.me/+51936004651`;
    window.open(url, '_blank');
}

document.querySelector('.product-item-tabbar').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});
document.querySelector('.product-item-tabbar').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
  