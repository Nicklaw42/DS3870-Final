$('#btnCreateUser').click(function(){
    console.log('Create Account Clicked');
    let strUserName = $('#txtUserName').val(); 
    let strFirstName =$('#txtFirstName').val();
    let strLastName =$('#txtLastName').val();
    let strPhone =$('#txtPhone').val();
    let strPassword =$('#txtPassword').val();
    let strTeamCode =$('#txtTeamCode').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/addUser.php?strUserName=' +strUserName +'&strFirstName=' +strFirstName+ '&strLastName=' +strLastName+ '&strPhone=' +strPhone+ '&strPassword=' +strPassword+ '&strTeamCode=' +strTeamCode+ '', function(User){
        $.each(User, function (result)
            {if(User.result =='Error')
            {
                alert('Failed To Create User');
            }   
            else {
                alert('User Created');
            }     
            })
    })
    
})