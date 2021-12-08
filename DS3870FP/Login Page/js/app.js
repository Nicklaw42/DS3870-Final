
    

$(document).on('click','#btnLogin',function(){
    let strUsername = $('#txtLoginEmail').val();
    let strPassword = $('#txtLoginPassword').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/newSession.php?strUsername='+ strUsername + '&strPassword=' + strPassword,function (data) {
    if(data.Outcome == 'Error'){
    alert("Error");
    } else {
    sessionStorage.setItem('SessionID',data.Outcome);
    window.location.href='frame.html';
    }
    
    })
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

