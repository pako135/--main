function handleSignUp(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        username,
        email,
        password,
    };

    axios.post('/sign-up', data)
        .then(function (response) {
            if (response.status === 200) {
                window.location.href = '/home';
            } else {
                alert('Sign up failed');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
