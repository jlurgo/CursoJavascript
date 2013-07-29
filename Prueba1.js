$(function () {
    var panel_principal = $('#principal');
    
    var alta1 = new AltaDeUsuario();
    panel_principal.append(alta1.ui);
    
    var alta2 = new AltaDeUsuario();
    panel_principal.append(alta2.ui);
});