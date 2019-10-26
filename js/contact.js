function getMensaje() {
    let nombre, email, Mensaje;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    Mensaje = document.getElementById('form_Mensaje').value;
    alert(nombre + '\n' + email + '\n' + Mensaje);
}
Email.send({
    Host: "smtp.yourisp.com",
    Username: "jr954737@gmail.com",
    Password: "password",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "nombre",
    Body: "Mensaje"
}).then(
    message => alert(message)
);