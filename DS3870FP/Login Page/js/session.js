$('#btnLogin').click(function(){
    console.log('btLogin Pressed');
    let strUserName = $('#txtLoginEmail').val(); 
    let strPassword =$('#txtLoginPassword').val();
        $.getJSON('https://www.swollenhippo.com/DS3870/newSession.php?strUsername='+ strUserName +'&strPassword='+strPassword+'', function(Login){
                
                if(Login.result =='Error')
                {
                    alert('Login Failed');
                   
                }   
                else {
                    console.log("login successful")
                }     
            
                
        })
        
    })