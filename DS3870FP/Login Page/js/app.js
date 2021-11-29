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
    if($('#Employees').val() != '---'){
        $('#divGeorge').css('display', 'inherit');
        $('#btnAddEmployee').css('pointer-events', 'none');
    //$('divHours').css('display','none');
    } else {
        $('#divGeorge').css('display', 'none');
        $('#btnAddEmployee').css('pointer-events', 'auto');
    }
})
$('#slcTasks').change(function() {
    if($('#slcTasks').val() != '---'){
        $('#divTasks').css('display', 'inherit');
    } else {
        $('#divTasks').css('display', 'none');
    
    }
})
$('#slcBuilding').change(function() {
    if($('#slcBuilding').val() != '---'){
        $('#divBuilding').css('display', 'inherit');
    } else {
        $('#divBuilding').css('display', 'none');
    
    }
})

