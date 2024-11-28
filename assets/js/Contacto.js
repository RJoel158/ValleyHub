$(document).ready(function() {
    let registros = [];

    // Función para registrar una persona
    $('#btnRegistrar').click(function() {
        const nombre = $('#name').val(); // Eliminar espacios en blanco
        const mail = $('#email').val();
        const asunto = $('#subject').val();
        const msg = $('#Mensaje').val();

        // Validar que todos los campos tengan contenido no vacío
        if (nombre==""||mail==""||asunto==""||msg=="") {
            alert("Por favor, complete todos los campos.");
        } else {
            registros.push({ nombre, mail, asunto, msg });
            
            // Limpiar campos
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#Mensaje').val('');
            
            alert("Registro exitoso");
            console.log(registros);
        }
    });
});
