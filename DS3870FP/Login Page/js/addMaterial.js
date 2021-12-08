

$('#btnAddMaterial').click(function(){
    console.log('New Material Added');
    let strDescription = $('#txtDescription').val(); 
    let intMinOnHand =$('#txtMinimumAmount').val();
    let strUnit =$('#txtCurrentAmount').val();
    let decCost =$('#txtUnitPrice').val();
    let strProductNumber =$('#txtUPC').val();
    let strMaterialHandlingInstructions =$('#txtInstructions').val();
        $.getJSON('https://www.swollenhippo.com/DS3870/addMaterialsBySessionID.php?strSessionID='+ sessionStorage.getItem('SessionID') + '&strDesciption='+strDescription+'&intMinOnHand ='+intMinOnHand+'&strUnit='+strUnit+'&decCost='+decCost+'&strProductNumber='+strProductNumber+'&strMaterialHandlingInstructions='+strMaterialHandlingInstructions+'', function(User){
                
                if(User.result =='Error')
                {
                    alert('Failed To Add Material');
                   
                }   
                else {
                    alert('New Material Added');
                }     
            
                
        })
        
    })
    var arrTeamMembers;
    if(sessionStorage.getItem('SessionID') == true){
        
        $.getJSON('https://www.swollenhippo.com/DS3870/getMaterialsBySessionID.php?SessionID='+ sessionStorage.getItem('SessionID'), function (data){
           arrTeamMembers = data;
            $.each(data, function(result){
                let strTableRow =  '<tr><td>'+result.Description+', '+result.MinOnHand+'</td><td>'+result.Unit+'</td><td>'+result.Cost+'</td></tr>'
                $('#tblMaterials tbody').append(strTableRow);
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
    }}