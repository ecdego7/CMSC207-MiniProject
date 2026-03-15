const funfacts = [
    "I played in a marching band all my high school years. I played the baritone",
    "I started to be interested in coding at the start of 2023.",
    "One of my proudest moments was taking the public bus to go on an hour-long trip to Hiroshima City all by myself.",
    "I work around footfall traffic on some North American real estate properties.",
];

const button = document.getElementById("funfactbutton");
const output = document.getElementById("funfacttext");


let timer;
let clickedonce = false;


if (button && output) {
    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * funfacts.length);
        output.textContent = funfacts[randomIndex];

        if (!clickedonce) {
            button.textContent = "Show Another Fun Fact";
            clickedonce = true;
        }

        clearTimeout(timer);

        timer = setTimeout(function () {
            output.textContent = "";
        }, 4000);
    });
}
