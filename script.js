// ================= EMAIL FORMS =================

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function (e) {

        const emailInput = form.querySelector('input[type="email"]');

        if (emailInput) {

            e.preventDefault();

            const email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter an email address.");
                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            localStorage.setItem("netflixEmail", email);

            alert("Email saved successfully!");

            emailInput.value = "";
        }
    });

});

// ================= LANGUAGE SELECT =================

const languageSelects = document.querySelectorAll("select");

languageSelects.forEach(select => {

    select.addEventListener("change", function () {

        if (this.value === "Hindi") {
            alert("भाषा हिन्दी में बदल दी गई");
        } else {
            alert("Language changed to English");
        }

    });

});

// ================= FAQ ACCORDION =================

const faqData = [
`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,

`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.`,

`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web from your personal computer or on any internet-connected device including smart TVs, smartphones, tablets and game consoles.

You can also download your favourite shows and watch them offline.`,

`Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees.`,

`Netflix has an extensive library of feature films, documentaries, TV shows, anime and Netflix Originals.`,

`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films.`
];

const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {

    const answer = document.createElement("div");

    answer.classList.add("answer");
    answer.innerText = faqData[index];

    answer.style.display = "none";
    answer.style.padding = "30px";
    answer.style.backgroundColor = "#2f2f2f";
    answer.style.color = "white";
    answer.style.fontSize = "18px";
    answer.style.lineHeight = "1.6";
    answer.style.marginTop = "-8px";
    answer.style.marginBottom = "8px";
    answer.style.whiteSpace = "pre-line";

    question.insertAdjacentElement("afterend", answer);

    question.style.cursor = "pointer";

    question.addEventListener("click", () => {

        const isVisible = answer.style.display === "block";

        document.querySelectorAll(".answer").forEach(ans => {
            ans.style.display = "none";
        });

        answer.style.display = isVisible ? "none" : "block";

    });

});

// ================= TRENDING POSTERS =================

const posters = document.querySelectorAll(".shows img");

posters.forEach((img, index) => {

    img.style.opacity = "0";

    setTimeout(() => {
        img.style.opacity = "1";
        img.style.transition = "all 0.5s ease";
    }, index * 100);

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.08)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

    img.addEventListener("click", () => {

        const title = img.alt;

        alert(`Now showing: ${title}`);

    });

});

// ================= SIGN IN BUTTON =================

const signinBtn = document.querySelector(".signin");

if (signinBtn) {

    signinBtn.addEventListener("click", () => {
        console.log("Redirecting to Sign In page...");
    });

}

// ================= LOAD SAVED EMAIL =================

window.addEventListener("load", () => {

    const savedEmail = localStorage.getItem("netflixEmail");

    if (savedEmail) {

        const emailInput =
            document.querySelector("#email");

        if (emailInput) {
            emailInput.value = savedEmail;
        }

        console.log("Saved Email:", savedEmail);
    }

});

// ================= SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {

            card.style.transform =
                "translateY(0px)";

            card.style.opacity = "1";

            card.style.transition =
                "all 0.6s ease";

        }

    });

});

// ================= INITIAL CARD STATE =================

const cards = document.querySelectorAll(".cards");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

});