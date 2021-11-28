$(document).ready(function() {
    $('#tblMaterials').DataTable({
        filter: true,
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true
    });
} );

$('#Employees').change(function() {
    if($('#Employees').val() == '---'){
        $('#divGeorge').slideUp();
    //$('divHours').css('display','none');
    } else {
        $('#divGeorge').slideDown();
    }
})