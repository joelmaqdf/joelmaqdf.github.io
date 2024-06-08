import EMAIL_USER_ID from "./apiKeys";

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o formulário de enviar normalmente
    var formData = new FormData(this); // Obter os dados do formuláriod
    if(!EMAIL_USER_ID) {
        event.preventDefault();
        const title = formData.get('name');
        const message = formData.get('message');
        window.open(`mailto:joelmaqdf@gmail.com?subject=${title}&body=${message}`);
        return;
    }
    var data = { // Preparar os dados para enviar por email
        service_id: 'gmailMessage', // ID do serviço de email
        template_id: 'template_oouvpia', // ID do modelo de email
        user_id: '%USER_ID%', //'TMxr3AJo9vOeebFBN' ID do usuário
        template_params: { // Parâmetros do modelo de email
            'username': formData.get('name'), // Nome do remetente
            'email': formData.get('email'), // Email do remetente
            'message': formData.get('message') // Mensagem do remetente
        }
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', { // Enviar os dados para a API do EmailJS
        method: 'POST', // Método da requisição
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo da requisição
        },
        body: JSON.stringify(data) // Converter os dados para JSON
    })
    .then(function(response) { // Lidar com a resposta da requisição
        if (response.ok) { // Se a resposta for bem-sucedida
            alert('Your mail is sent!'); // Alerta de sucesso
        } else {
            alert('Oops... ' + response.statusText); // Alerta de erro com a mensagem de erro da resposta
        }
    })
    .catch(function(error) { // Capturar erros de requisição
        alert('Oops... ' + error); // Alerta de erro com a mensagem de erro
    });
});