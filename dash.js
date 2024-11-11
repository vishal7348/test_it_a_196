
async function fetchData() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        
        const container = document.getElementById("div1");
        container.innerHTML = "";  // Clear previous data if any

        data.forEach((user) => {
            let userContainer = document.createElement("div");

            let h1 = document.createElement("h1");
            h1.textContent = user.login;

            let a = document.createElement("a");
            a.textContent = "Profile";
            a.setAttribute("href", user.html_url);
            a.setAttribute("target", "_blank");  // Opens in a new tab

            userContainer.appendChild(h1);
            userContainer.appendChild(a);
            container.appendChild(userContainer);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function sortUsers() {
    const container = document.getElementById("div1");
    const sortOption = document.getElementById("sortOptions").value;

    let users = Array.from(container.querySelectorAll("div"));
    if (sortOption === "alphabetical") {
        users.sort((a, b) => a.textContent.localeCompare(b.textContent));
    } else {
        users.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
    }

    container.innerHTML = "";
    users.forEach(user => container.appendChild(user));
}

function logout() {
    window.location.href = "login.html";  // Redirects to login page
}
