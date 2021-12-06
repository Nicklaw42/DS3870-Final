$('#btnCreateUser').click(function(){
    console.log('Create Account Clicked');
    let strUserName = $('#txtEmail').val(); 
    let strFirstName =$('#txtUserFirstName').val();
    let strLastName =$('#txtUserLastName').val();
    let strPhone =$('#txtUserPhone').val();
    let strPassword =$('#txtUserPassword').val();
    let strTeamCode =$('#txtUserTeamCode').val();
        $.getJSON('https://www.swollenhippo.com/DS3870/addUser.php?strUserName=' +strUserName +'&strFirstName=' +strFirstName+ '&strLastName=' +strLastName+ '&strPhone=' +strPhone+ '&strPassword=' +strPassword+ '&strTeamCode=' +strTeamCode+ '', function(User){
                
                if(User.result =='Error')
                {
                    alert('Failed To Create User');
                   
                }   
                else {
                    alert('User Created');
                }     
            
                
        })
        
    })