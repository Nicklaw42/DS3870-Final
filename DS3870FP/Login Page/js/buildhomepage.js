$.getJSON('https://www.swollenhippo.com/DS3870/getUserDetailsBySessionID.php?strSessionID=' + sessionStorage.getItem('SessionID'), function(User){
    $.each(User, function(i, User){
        let strUser = '<div class="card divHomePage mb-2" style=" background-color: #221e25; border-color: #fc542b; border-width: 3px;">';
        strUser += '<div class="card  col-6" style=" background-color: #221e25;">';
        strUser += '<h3>'+ User.FirstName +''+User.LastName+'</h3>';
        strUser +='<h4>'+User.Email+'</h4>';
        strUser += '<h4>'+User.Phone+'</h4>';
        strUser += '</div>';
        strUser += '<div class="card col-6" style=" background-color: #221e25;">';
        
        strUser += '</div>';
        strUser += '</div>';
        $('#divUserDashboard').append(strUser);
    })
  
})

