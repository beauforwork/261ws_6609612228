function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {};
    loginData.UserName = username;
    loginData.PassWord = password;

    var jsonData = JSON.stringify(loginData);

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU7908dee6d8b885c29f0457b4b709233032e25f50e6554a70f84832c60159d12e3b0bd6aa3c4332012bcf227261a0b51c'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}




