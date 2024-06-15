/*
* Require the apiKeys file, edit _apiKeys.js
* The EMAIL_USER_ID contain the '/api.emailjs.com' secret key
*/
let EMAIL_USER_ID;
let EMAIL;
import('./env.js').then((keySecret) => {
    EMAIL_USER_ID = keySecret.default.emailSecretKey || undefined;
    EMAIL = keySecret.default.email || undefined;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    if(!EMAIL_USER_ID) {
        // Follow with the user app email
        event.preventDefault();
        const title = formData.get('name');
        const message = formData.get('message');
        window.open(`mailto:${EMAIL || ''}?subject=${title}&body=${message}`);
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