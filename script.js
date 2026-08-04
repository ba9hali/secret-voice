const bootLines = [
    "Initializing...",
    "Face Recognition... ✔ Match Found",
    "Voice Recognition... ✔ Match Found",
    "Human Verification... ✔ Human Confirmed",
    "Decrypting Audio..."
];

const boot = document.getElementById("boot");
const playBtn = document.getElementById("playBtn");
const ending = document.getElementById("ending");

const voice = document.getElementById("voice");

const loadingText = document.getElementById("loadingText");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const makima = document.getElementById("makima");

let currentLine = 0;

function typeLine() {

    if (currentLine >= bootLines.length) {

        setTimeout(() => {

            boot.style.display = "none";

            playBtn.style.display = "inline-block";

            playBtn.animate([
                {
                    opacity: 0,
                    transform: "translateY(20px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ], {
                duration: 600,
                fill: "forwards"
            });

        }, 600);

        return;
    }

    const element = document.getElementById("line" + (currentLine + 1));

    const text = bootLines[currentLine];

    let index = 0;

    element.style.opacity = 1;

    function typeChar() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(typeChar, 45);

        }

        else {

            currentLine++;

            setTimeout(typeLine, 2000);

        }

    }

    typeChar();

}

typeLine();

playBtn.onclick = () => {

    playBtn.style.display = "none";

    voice.play();

};

voice.onended = () => {

    ending.style.display = "block";

    loadingText.textContent = "Destroying Audio File...";

    let value = 0;

    const fakeMessages = [

        "Deleting cache...",
        "Removing traces...",
        "Destroying audio...",
        "Cleaning session..."

    ];

    let messageIndex = 0;

    const messageTimer = setInterval(() => {

        if (messageIndex < fakeMessages.length) {

            loadingText.textContent = fakeMessages[messageIndex];

            messageIndex++;

        }

    }, 900);

    const progressTimer = setInterval(() => {

        value++;
                progress.style.width = value + "%";
        percent.textContent = value + "%";

        if (value >= 100) {

            clearInterval(progressTimer);
            clearInterval(messageTimer);

            loadingText.textContent = "Audio Destroyed ✔";

            setTimeout(() => {

                makima.style.display = "block";

                makima.animate([
                    {
                        opacity: 0,
                        transform: "scale(.8)"
                    },
                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                ], {
                    duration: 700,
                    fill: "forwards"
                });

                setTimeout(() => {

                    location.reload();

                }, 1800);

            }, 500);

        }

    }, 35);

};
