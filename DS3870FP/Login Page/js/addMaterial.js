
//Doesn't work
$('#btnAddMaterial').click(function(){
    console.log('New Material Added');
    let strDescription = $('#txtDescription').val(); 
    let intMinOnHand =$('#txtMinimumAmount').val();
    let strUnit =$('#txtCurrentAmount').val();
    let decCost =$('#txtUnitPrice').val();
    let strProductNumber =$('#txtUPC').val();
    let strMaterialHandlingInstructions =$('#txtInstructions').val();
        $.getJSON('https://www.swollenhippo.com/DS3870/addMaterialsBySessionID.php?strSessionID=9b34da53-4253-414c-8f09-dc31377efa92&strDesciption='+strDescription+'&intMinOnHand ='+intMinOnHand+'&strUnit='+strUnit+'&decCost='+decCost+'&strProductNumber='+strProductNumber+'&strMaterialHandlingInstructions='+strMaterialHandlingInstructions+'', function(User){
                
                if(User.result =='Error')
                {
                    alert('Failed To Add Material');
                   
                }   
                else {
                    alert('New Material Added');
                }     
            
                
        })
        
    })