$(document).ready(function() {
    $('#tblMaterials').DataTable({
        filter: true,
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true
    });
} );


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

