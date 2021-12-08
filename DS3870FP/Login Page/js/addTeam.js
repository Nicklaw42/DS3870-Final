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


/*var arrTeamMembers;


    if(sessionStorage.getItem('SessionID') == true){
        
        $.getJSON('https://www.swollenhippo.com/DS3870/getTeamMembersBySession.php?SessionID='+ sessionStorage.getItem('SessionID'), function (data){
           arrTeamMembers = data;
            $.each(data, function(result){
                let strTableRow =  '<tr><td>'+result.LastName+', '+result.FirstName+'</td><td>'+result.Email+'</td><td>'+result.UserStatus+'</td></tr>'
                $('#tblTeam tbody').append(strTableRow);
            })
        })
    }


function verifySessionID(strSessionID){
    if(sessionStorage.getItem('SessionID')){
        $.getJSON('https://www.swollenhippo.com/DS3870/verifySession.php?SessionID='+strSessionID, function (data){
            if(data.Outcome == 'Valid'){
                return true;
            }else{
                return false;
            }
        })
    }else{
        return false;
    }*/
//Everything below is for filling the team table on the Management page. 
$('#btnFindTeam').click(function(){
    console.log("FindTeamClicked");
    let strTeamCode = $('#txtFindTeam').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamMembersWithCode.php?strTeamCode='+ strTeamCode +'', function(output){
        $.each(output, function(i, output){
        $('#tblTeam').append( '<tr><td>'+output.Email+'</td><td>'+output.FirstName+'</td><td>'+output.LastName+'</td><td>'+output.Phone+'</td><td>'+output.UserStatus+'</td></tr>')
        })
        $('#tblTeam').DataTable();
    })
    
})
