
document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if (validateLogin(username, password)) {
        window.location.href = "dash.html";
    } else {
        alert("Please enter both username and password");
    }
});

function validateLogin(username, password) {
    return username === "admin" && password === "admin";
}
