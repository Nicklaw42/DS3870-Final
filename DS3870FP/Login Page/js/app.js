$('#btnCreateUser').click(function(){
    console.log('Create Account Clicked');
    let strUserName = $('#txtUserName').val(); 
    let strFirstName =$('#txtFirstName').val();
    let strLastName =$('#txtLastName').val();
    let strPhone =$('#txtPhone').val();
    let strPassword =$('#txtPassword').val();
    let strTeamCode =$('#txtTeamCode').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/DS3870/addUser.php?strUserName=' +strUserName +'&strFirstName=' +strFirstName+ '&strLastName=' +strLastName+ '&strPhone=' +strPhone+ '&strPassword=' +strPassword+ '&strTeamCode=' +strTeamCode+ '', function(data){
        $.each(data, function (result)
            if(result.Outcome =='Error')
            {
                alert('Failed To Create User');
            }   
            else {
                alert('User Created');
            }     
        )
    
})


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

