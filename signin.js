
window.addEventListener("DOMContentLoaded", () => {

    const savedEmail = localStorage.getItem("netflixEmail");
    const emailInput = document.getElementById("email");

    if (savedEmail && emailInput) {
        emailInput.value = savedEmail;
    }

});



const helpSection = document.querySelector(".help");
const helpLinks = document.querySelector(".link");

if (helpLinks) {
    helpLinks.style.display = "none";
}

if (helpSection) {

    helpSection.style.cursor = "pointer";

    helpSection.addEventListener("click", () => {

        if (helpLinks.style.display === "none") {
            helpLinks.style.display = "block";
        } else {
            helpLinks.style.display = "none";
        }

    });

}



const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email or phone number.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
            /^[0-9]{10}$/;

        if (
            !emailPattern.test(email) &&
            !phonePattern.test(email)
        ) {
            alert(
                "Enter a valid email address or 10-digit phone number."
            );
            return;
        }

        localStorage.setItem(
            "netflixEmail",
            email
        );

        alert("Sign in successful!");

        window.location.href = "index.html";

    });

}


const input = document.getElementById("email");

if (input) {

    input.addEventListener("focus", () => {
        input.style.border = "2px solid white";
    });

    input.addEventListener("blur", () => {
        input.style.border = "";
    });

}