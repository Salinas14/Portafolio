function validar(){
    
    var rut = document.getElementById("txtRut").value;
    var pass = document.getElementById("txtPassword").value;

    if( rut =="admin" && pass == "admin"){
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
            </button>
            <strong>Exito!</strong> Usted a ingresado correctamente.
        </div>
    }
    return true;
};

function registrar(){

    var rutR = document.getElementById("txtRutRegistro").value;
    var dvR = document.getElementById("txtDvRegistro").value;
    var nombreR = document.getElementById("txtNombreRegistro").value;
    var apellidoR = document.getElementById("txtApellidoRegistro").value;
    var domicilioR = document.getElementById("txtDomicilioRegistro").value;
    var correoR = document.getElementById("txtCorreoRegistro").value;
    var telefonoR = document.getElementById("txtTelefonoRegistro").value;
    var contrasenaR = document.getElementById("txtContrasenaRegistro").value;

    if(rutR.length < 1){
        return false;
    }
    if(dvR.length < 1){
        return false;
    }
    if(nombreR.length < 1){
        return false;
    }
    if(apellidoR.length < 1){
        return false;
    }
    if(domicilioR.length < 1){
        return false;
    }
    if(correoR.length < 1){
        return false;
    }
    if(telefonoR.length < 1){
        return false;
    }
    if(contrasenaR.length < 1){
        return false;
    }
    var dato = location.href="../index.html";
    return dato;
}

