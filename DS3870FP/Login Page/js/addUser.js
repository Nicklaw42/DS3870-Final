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

    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamMembersWithCode.php?strTeamCode=YTP2EFU3', function(team){
   
        let strTeam = '<select class="slcEmployee" id="Employees">';
        strTeam += '<option value="---" style="text-align: center;">---</option>';
        strTeam += '<option value='+team[0].FirstName+' style="text-align: center;">'+team[0].FirstName+'</option>';
        strTeam += '<option value="god" style="text-align: center;">'+team[1].FirstName+'</option>';
        strTeam += '</select>';
        $('#divEmployeeSelector').append(strTeam);

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
    })

    $.getJSON('https://www.swollenhippo.com/DS3870/getUserDetailsBySessionID.php?strSessionID=9b34da53-4253-414c-8f09-dc31377efa92', function(User){
    
        let strUser = '<div id="divEmployeeProfile">';
        strUser += '<p>Email: '+User[0].Email+'';
        strUser += '<p>Name:'+User[0].FirstName+' '+User[0].LastName+' </p>';
        strUser +=' <p>Phone: '+User[0].Phone+'</p>';
        strUser +='<p>Status: '+User[0].UserStatus+'</p>';
        strUser +='<button id="btnUserActive">Active</button>'
        strUser +='<button>Deactivate</button>'
        strUser +='</div>';
        $('#divGeorge').append(strUser);
    
        
  
})

  

