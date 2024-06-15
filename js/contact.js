/*
* Require the apiKeys file with the const EMAIL_USER_ID
* The EMAIL_USER_ID contain the '/api.emailjs.com' secret key
*/
import EMAIL_USER_ID from "./apiKeys.js" 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    if(!EMAIL_USER_ID) {
        // Follow with the user app email
        event.preventDefault();
        const title = formData.get('name');
        const message = formData.get('message');
        window.open(`mailto:joelmaqdf.dev@gmail.com?subject=${title}&body=${message}`);
        return;
    }

    // Use the email service request
    var data = {
        service_id: 'gmailMessage',
        template_id: 'template_oouvpia',
        user_id: EMAIL_USER_ID,
        template_params: {
            'username': formData.get('name'),
            'email': formData.get('email'),
            'message': formData.get('message')   
        }
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.ok) {
            alert('Your mail is sent!');
        } else {
            alert('Oops... ' + response.statusText);
        }
    })
    .catch(function(error) {
        alert('Oops... ' + error);
    });
});