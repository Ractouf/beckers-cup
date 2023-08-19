const progressBar = document.querySelector("#progress-bar");
const slider = document.querySelector("#slider");

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
                if (sliderIndex - 1 < 0) {
                    slider.style.setProperty("--slider-index", progressBarItemCount - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[progressBarItemCount - 1].classList.add("active");
                } else {
                    slider.style.setProperty("--slider-index", sliderIndex - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[sliderIndex - 1].classList.add("active");
                }
            }

            if (handle.classList.contains("right-handle")) {
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
        }
    });
});

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
            let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));

            slider.style.setProperty("--slider-index", index);
            progressBar.children[sliderIndex].classList.remove("active");
            progressBar.children[index].classList.add("active");
        });
    });
}

const throttleProgressBar = throttle(() => {
    calculateProgressBar(document.querySelector("#progress-bar"));
    }, 250);
window.addEventListener("resize", throttleProgressBar);

calculateProgressBar(document.querySelector("#progress-bar"));

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

let intervalID;
function startCarousel() {
    intervalID = setInterval(() => {
        const rightHandle = document.querySelector(".right-handle");

        rightHandle.dispatchEvent(new MouseEvent("click"));
    }, 5000);
}
startCarousel();

const sliderImages = document.querySelectorAll("#slider > img");
const imageViewer = document.getElementById("image-viewer");
const largeImage = document.getElementById("large-image");
const closeButton = document.getElementById("close-button");

sliderImages.forEach((image) => {
    image.addEventListener("click", () => {
        showLargeImage(image.src);
    });
});

function showLargeImage(src) {
    largeImage.src = src;
    clearInterval(intervalID);
    imageViewer.classList.remove("invisible");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}

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

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const textArea = document.querySelector("textarea");
    const arrayOfLines = textArea.value.split("\n");
    const teamsElements = document.querySelector("#teams").children;

    for (let i = 0; i < 4; i++) {
        teamsElements[i].textContent = "";
    }

    arrayOfLines.sort(() => Math.random() - 0.5);


    const teamNameInput = document.createElement("input");
    teamNameInput.setAttribute("placeholder", "Nom équipe");
    teamNameInput.classList.add("p-1", "rounded");
    arrayOfLines.forEach((line, index) => {
        if (line !== "") {
            const playerName = document.createElement("p");
            playerName.textContent = line;
            console.log(playerName)
            teamsElements[index % 4].append(playerName);
        }
    });

    for (let i = 0; i < 4; i++) {
        teamsElements[i].append(teamNameInput.cloneNode());
    }
});
