$('#btnAddTeam').click(function(){
    console.log('New Team CLicked');
    let strTeamName = $('#txtTeamName').val();
    let strStreetAddress = $('#txtStreetAddress').val();
    let strZIP = $('#txtZIP').val();
    let strState = $('#txtState').val();
    let strContactNumber = $('#txtPhone').val();
    let strOwner = $('#txtEmail').val();
    let strAPIKey = 'b733d735-7ee6-4739-a3fd-3cebe7aa3e35';
    let strFirstName = $('#txtFirstName').val();
    let strLastName = $('#txtLastName').val();
    let strPhone = $('#txtOwnerPhone').val();
    let strPassword = $('#txtPassword').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/addTeam.php?strTeamName=' + strTeamName + '&strStreetAddress=' + strStreetAddress + '&strZIP=' + strZIP + '&strState=' + strState + '&strContactNumber=' + strContactNumber + '&strOwner=' + strOwner + '&strAPIKey=' + strAPIKey + '&strFirstName=' + strFirstName + '&strLastName=' + strLastName + '&strPhone=' + strPhone + '&strPassword=' + strPassword + '', function(data){
        console.log(data);
    $.each(data, function (result) 
        {if(result.Outcome == 'Error'){
            alert('Found Error');
        } else {
            alert('You are verified');
        }
        })
})
})