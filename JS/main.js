
// Mensaje de exito al enviar el formulario de contacto

document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const aviso = document.getElementById('aviso-envio');
    aviso.classList.remove('d-none');

    this.reset();

    setTimeout(() => {
        aviso.classList.add('d-none');
    }, 5000);
});

