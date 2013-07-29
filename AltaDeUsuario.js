var AltaDeUsuario = function(){
    this.ui = $('#plantilla_alta_de_usuario').clone();  
    var txtNombre = this.ui.find('#txtNombre');
    var txtApellido = this.ui.find('#txtApellido');
    var txtTelefono = this.ui.find('#txtTelefono');
    var btnEnviar = this.ui.find('#btnEnviar');
    
    btnEnviar.click(function(){
        alert('hola ' + txtNombre.val() + ' ' + txtApellido.val() + '!!!');        
    });
    
    var IsNumeric = function(input){
        var RE = /^-{0,1}\d*\.{0,1}\d+$/;
        return (RE.test(input));
    }
    
    txtTelefono.change(function(){
        if(!IsNumeric(txtTelefono.val())){ 
            alert('el telefono debe ser numerico');
            txtTelefono.val('');
            this.focus();
        }        
    });
};

