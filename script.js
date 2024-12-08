// Agregar interacción con el formulario de contacto (opcional)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío por defecto del formulario
    alert('¡Gracias por contactarnos! Recibiremos tu mensaje pronto.');
});


<form id="contactForm" class="contact-form">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" required></input>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required></input>
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
</form>


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill out all fields.");
    }
});


const products = [
    { id: 1, name: "Padel Racket", description: "High quality racket", price: 50 },
    { id: 2, name: "Padel Balls", description: "Set of 3 balls", price: 10 }
];
localStorage.setItem("products", JSON.stringify(products));


function addProduct(product) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
}


function displayProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `<li>${product.name} - ${product.price}</li>`;
    });
}


function updateProduct(id, newDetails) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...newDetails };
        localStorage.setItem("products", JSON.stringify(products));
    }
}


function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
}


// Gestionar la acción de enviar la pregunta
document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página
    
    // Obtener el valor de la pregunta
    var question = document.getElementById('question').value;
    
    // Si la pregunta no está vacía
    if (question.trim() !== "") {
        // Crear un nuevo elemento div para mostrar la pregunta
        var newQuestion = document.createElement('div');
        newQuestion.classList.add('question');
        newQuestion.textContent = question;
        
        // Añadir la pregunta al contenedor de preguntas
        document.getElementById('forumQuestions').appendChild(newQuestion);
        
        // Limpiar el campo de texto después de enviar la pregunta
        document.getElementById('question').value = "";
    }
});


function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validar nombre (debe tener al menos 3 caracteres)
    if (name.length < 3) {
        alert("Por favor, ingresa un nombre válido.");
        return false;
    }

    // Validar correo electrónico (se asume que el tipo 'email' ya hace parte de la validación básica)
    if (!email.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar teléfono (debe tener al menos 10 caracteres numéricos)
    if (phone.length < 10 || isNaN(phone)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return false;
    }

    // Validar mensaje (debe tener al menos 10 caracteres)
    if (message.length < 10) {
        alert("Por favor, ingresa un mensaje válido.");
        return false;
    }

    return true;  // Si todas las validaciones pasan, el formulario se envía
}
