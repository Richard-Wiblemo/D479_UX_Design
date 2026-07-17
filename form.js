document.getElementById('userForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    
    if (email !== confirmEmail) {
        alert("'Email' and 'Confirm Email' fields must match!");
        event.preventDefault();
    }
});