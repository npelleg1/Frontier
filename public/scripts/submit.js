'use strict';

function sendMessage(){

    var email = document.getElementById('emailid').value;
    var name = document.getElementById('nameid').value;

    var message = {
        'email': email
    };

    if(name !== '' && email !== '') {
        firebase.database().ref('subscribers/'+name).set(message);
        window.alert("Thank you for signing up " + name + "!");
    }
}