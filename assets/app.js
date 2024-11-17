
class ProductCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('elTemplate');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
         // Crear un enlace al archivo CSS
         const link = document.createElement('link');
         link.rel = 'stylesheet';
         link.href = 'assets/style.css';  // Ruta a tu archivo CSS
 
         // Añadir el enlace al shadowRoot
         shadowRoot.appendChild(link);

        // Add random image
        const image = shadowRoot.querySelector('.product-image');
        image.src = `https://picsum.photos/200/150?random=${Math.random()}`; 

        
    }
}

customElements.define('product-card', ProductCard);


const cookieDialog = document.getElementById('cookieDialog');
const acceptarButton = document.getElementById('acceptarCookies');

// Mostrar el diálogo al cargar la página
window.addEventListener('load', () => {
    cookieDialog.showModal();
});

// Cerrar el diálogo al hacer clic en "Aceptar"
acceptarButton.addEventListener('click', () => {
    cookieDialog.close();
});