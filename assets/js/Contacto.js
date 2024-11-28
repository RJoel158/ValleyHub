$(document).ready(function() {
    let registros = [];

    // Función para registrar una persona
    $('#btnRegistrar').click(function() {
        const nombre = $('#name').val();
        const mail = $('#email').val();
        const asunto = $('#subject').val();
        const msg = $('#Mensaje').val();
        
        if (nombre && mail && asunto && msg) {
            registros.push({ nombre, mail, asunto, msg });
            $('#nombre').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#Mensaje').val('');
            alert("Registro exitoso");
            console.log(registros);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});