$(document).ready(function() {
    $('#tblMaterials').DataTable({
        filter: true,
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true
    });
} );