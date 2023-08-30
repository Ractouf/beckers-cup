const progressBar = document.querySelector("#progress-bar");
const slider = document.querySelector("#slider");
const sliderImages = document.querySelectorAll("#slider > img");
const imageViewer = document.querySelector("#image-viewer");
const largeImage = document.querySelector("#large-image");
const closeButton = document.querySelector("#close-button");
const form = document.querySelector("form");
const selectElement = document.querySelector("select");
const tournoi2023 = `
    <div id = "finales">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
        <div class = "match-container consolation-game">
            <div class = "match-text-container">
                <p class = "match-text">P.FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
    </div>

    <div id = "vertical-spacer"></div>

    <div class = "semi">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>

        <div id = "horizontal-spacer-container">
            <div></div>
            <div></div>
        </div>

        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
    </div>`;
const tournoi2022 = `
    <div id = "finales">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score">9</p>
                    <p>équipe1</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score">5</p>
                    <p>équipe4</p>
                </div>
            </div>
        </div>
        <div class = "match-container consolation-game">
            <div class = "match-text-container">
                <p class = "match-text">P.FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score">5</p>
                    <p>équipe3</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score">8</p>
                    <p>équipe2</p>
                </div>
            </div>
        </div>
    </div>

    <div id = "vertical-spacer"></div>

    <div class = "semi">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score">8</p>
                    <p>équipe1</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score">5</p>
                    <p>équipe2</p>
                </div>
            </div>
        </div>

        <div id = "horizontal-spacer-container">
            <div></div>
            <div></div>
        </div>

        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score">3</p>
                    <p>équipe3</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score">8</p>
                    <p>équipe4</p>
                </div>
            </div>
        </div>
    </div>`;
const tournoiVide = `
    <div id = "finales">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
        <div class = "match-container consolation-game">
            <div class = "match-text-container">
                <p class = "match-text">P.FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
    </div>

    <div id = "vertical-spacer"></div>

    <div class = "semi">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>

        <div id = "horizontal-spacer-container">
            <div></div>
            <div></div>
        </div>

        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">DEMI</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score"></p>
                    <p>?</p>
                </div>
            </div>
        </div>
    </div>`;
let intervalID;

/**
 * Displays the tournament based on the <select> value.
 */
function chooseTournament() {
    const selectedOption = selectElement.value;

    const tournoi = document.querySelector("#tournament");

    if (selectedOption === '2023') {
        tournoi.innerHTML = "";
        tournoi.innerHTML = tournoi2023;
    } else if (selectedOption === '2022') {
        tournoi.innerHTML = "";
        tournoi.innerHTML = tournoi2022;
    }
}
selectElement.addEventListener("change", chooseTournament);
document.addEventListener('DOMContentLoaded', chooseTournament);

/**
 * Changes the displayed image(s) when clicking on a handle.
 * Also resets timer to avoid double image switch.
 */
document.querySelectorAll(".handle").forEach(handle => {
    handle.addEventListener("click", e => {
        const progressBarItemCount = progressBar.children.length;
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));

        let handle;
        if (e.target.matches(".handle")) {
            handle = e.target;
        } else {
            handle = e.target.closest(".handle");
        }
        if (handle != null) {
            if (handle.classList.contains("left-handle")) {
                clearInterval(intervalID);
                if (sliderIndex - 1 < 0) {
                    slider.style.setProperty("--slider-index", progressBarItemCount - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[progressBarItemCount - 1].classList.add("active");
                } else {
                    slider.style.setProperty("--slider-index", sliderIndex - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[sliderIndex - 1].classList.add("active");
                }
            } else if (handle.classList.contains("right-handle")) {
                clearInterval(intervalID);
                if (sliderIndex + 1 >= progressBarItemCount) {
                    slider.style.setProperty("--slider-index", 0);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[0].classList.add("active");
                } else {
                    slider.style.setProperty("--slider-index", sliderIndex + 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[sliderIndex + 1].classList.add("active");
                }
            }
            startCarousel();
        }
    });
});

/**
 * @param progressBar HTML element
 * Creates the progress bar.
 */
function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";

    const itemCount = slider.children.length;
    let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
    const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));

    if (sliderIndex >= itemCount - 1) {
        slider.style.setProperty("--slider-index", itemCount - itemsPerScreen);
        sliderIndex = itemCount - itemsPerScreen;
    }

    for (let i = 0; i < itemCount - itemsPerScreen + 1; i++) {
        const barItem = document.createElement("div");
        barItem.classList.add("progress-item");
        if (i === sliderIndex) {
            barItem.classList.add("active");
        }
        progressBar.append(barItem);
    }

    const progressItems = document.querySelectorAll(".progress-item");

    progressItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            clearInterval(intervalID);

            let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));

            slider.style.setProperty("--slider-index", index);
            progressBar.children[sliderIndex].classList.remove("active");
            progressBar.children[index].classList.add("active");

            startCarousel();
        });
    });
}
calculateProgressBar(document.querySelector("#progress-bar"));

/**
 * Calculates the progressbar on resize.
 */
function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        } else {
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    }
}
const throttleProgressBar = throttle(() => {
    calculateProgressBar(document.querySelector("#progress-bar"));
}, 250);
window.addEventListener("resize", throttleProgressBar);

/**
 * Switches the carousel image every 5s.
 */
function startCarousel() {
    intervalID = setInterval(() => {
        const rightHandle = document.querySelector(".right-handle");

        rightHandle.click();
    }, 5000);
}
startCarousel();

/**
 * Sets an event listener for each image of the carousel to open image viewer.
 */
sliderImages.forEach((image) => {
    image.addEventListener("click", () => {
        showLargeImage(image.src);
    });
});

/**
 * @param src the image to be displayed
 * Shows a bigger version of selected image.
 */
function showLargeImage(src) {
    largeImage.src = src;
    clearInterval(intervalID);
    imageViewer.classList.remove("invisible");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}

/**
 * Close the image viewer.
 */
function closeImageViewer() {
    startCarousel();
    imageViewer.classList.add("invisible");
    document.body.style.overflow = "auto";
}
closeButton.addEventListener("click", closeImageViewer);
imageViewer.addEventListener("click", (event) => {
    if (event.target === imageViewer) {
        closeImageViewer();
    }
});

/**
 * Creates 4 random teams based on the <textarea> inputs.
 */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const textArea = document.querySelector("textarea");
    const arrayOfLines = textArea.value.split("\n");
    const teamsElements = document.querySelector("#teams").children;

    for (let i = 0; i < 4; i++) {
        teamsElements[i].textContent = "";
    }

    arrayOfLines.sort(() => Math.random() - 0.5);

    arrayOfLines.forEach((line, index) => {
        if (line !== "") {
            const playerName = document.createElement("p");
            playerName.textContent = line;
            teamsElements[index % 4].append(playerName);
        }
    });

    const teamNameInput = document.createElement("input");
    teamNameInput.setAttribute("placeholder", "Nom équipe");
    teamNameInput.classList.add("p-1", "rounded");
    for (let i = 0; i < 4; i++) {
        teamsElements[i].append(teamNameInput.cloneNode());
    }
});
