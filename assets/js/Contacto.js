$(document).ready(function() {
    let registros = [];

    // Función para registrar una persona
    $('#btnRegistrar').click(function() {
        const nombre = $('#name').val().trim();
        const mail = $('#email').val().trim();
        const asunto = $('#subject').val().trim();
        const msg = $('#Mensaje').val().trim();
        
        if (nombre && mail && asunto && msg) {
            registros.push({ nombre, mail, asunto, msg });
            $('#nombre').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#Mensaje').val('');
            alert("Registro exitoso");
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});