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
            'Application-Key': 'TUebd96a692d6364dd0d2858bc11226e8096758e91ac85c41736c4497830cab3a9a3c0848750e4ac8f0f273d0773a7b0e2'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        if (data.type == "student" || data.type == "employee") {
            document.getElementById('sid').innerText = data.username;
            document.getElementById('name').innerText = `Welcome ${data.displayname_en}!`;
        }
    })
    .catch(error => console.error('Error:', error));
}




