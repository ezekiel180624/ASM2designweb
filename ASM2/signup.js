function Signup(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (password.length < 8) {
        alert("The password must be at least 8 characters long!");
        return;
    }

    var user = {
        email: email,
        password: password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Success!");
}

function login(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);

    if (user === null) {
        alert("Wrong email or pasword!");
    } else if (email === data.email && password === data.password) {
        alert("Success");
        window.location.href = "1.html";
    } else {
        alert("Wrong password or password not enough 8 characters!");
    }
}