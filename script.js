const progressBar = document.querySelector("#progress-bar");
const slider = document.querySelector("#slider");
const tournoi2023 = `
    <div class = "flex justify-center winner">
        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white text-[10px] xl:text-base flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>GAGNANTS</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>?</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center">
        <div class="w-2 h-6 xl:h-10 bg-green-img"></div>

        <div class = "flex">
            <div class="w-16 xl:w-20 h-2 bg-green-img translate-x-1"></div>
            <div class="w-16 xl:w-20 h-2 bg-green-img -translate-x-1"></div>
        </div>
    </div>

    <div class = "flex justify-center semi gap-[24rem] xl:gap-[30rem]">
        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>FINALE</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>?</p>
            </div>
        </div>

        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>FINALE</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>?</p>
            </div>
        </div>
    </div>

    <div class = "flex justify-center gap-[24rem] xl:gap-[30rem]">
        <div class="flex flex-col justify-center items-center">
            <div class="w-2 h-6 xl:h-10 bg-green-img"></div>

            <div class = "flex">
                <div class="w-16 xl:w-20 h-2 bg-green-img translate-x-1"></div>
                <div class="w-16 xl:w-20 h-2 bg-green-img -translate-x-1"></div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center">
            <div class="w-2 h-6 xl:h-10 bg-green-img"></div>

            <div class = "flex">
                <div class="w-16 xl:w-20 h-2 bg-green-img translate-x-1"></div>
                <div class="w-16 xl:w-20 h-2 bg-green-img -translate-x-1"></div>
            </div>
        </div>
    </div>

    <div class = "flex justify-center quarter gap-32 xl:gap-40">
        <div class = "flex gap-32 xl:gap-40">
            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>?</p>
                </div>
            </div>

            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>?</p>
                </div>
            </div>
        </div>

        <div class = "flex gap-32 xl:gap-40">
            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>?</p>
                </div>
            </div>

            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>?</p>
                </div>
            </div>
        </div>
    </div>`;
const tournoi2022 = `
    <div class = "flex justify-center winner">
        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white text-[10px] xl:text-base flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>GAGNANTS</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>Nom équipe</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center">
        <div class="w-2 h-6 xl:h-10 bg-black"></div>

        <div class = "flex">
            <div class="w-16 xl:w-20 h-2 bg-black translate-x-1 z-10"></div>
            <div class="w-16 xl:w-20 h-2 bg-green-img -translate-x-1"></div>
        </div>
    </div>

    <div class = "flex justify-center semi gap-[24rem] xl:gap-[30rem]">
        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>FINALE</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>Nom équipe</p>
                <p>14</p>
            </div>
        </div>

        <div class="flex flex-row border-2 border-black rounded-md">
            <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                <div class="transform -rotate-90">
                    <p>FINALE</p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                <p>Nom équipe</p>
                <p>5</p>
            </div>
        </div>
    </div>

    <div class = "flex justify-center gap-[24rem] xl:gap-[30rem]">
        <div class="flex flex-col justify-center items-center">
            <div class="w-2 h-6 xl:h-10 bg-black"></div>

            <div class = "flex">
                <div class="w-16 xl:w-20 h-2 bg-black translate-x-1 z-10"></div>
                <div class="w-16 xl:w-20 h-2 bg-green-img -translate-x-1"></div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center">
            <div class="w-2 h-6 xl:h-10 bg-black"></div>

            <div class = "flex">
                <div class="w-16 xl:w-20 h-2 bg-green-img translate-x-1"></div>
                <div class="w-16 xl:w-20 h-2 bg-black -translate-x-1"></div>
            </div>
        </div>
    </div>

    <div class = "flex justify-center quarter gap-32 xl:gap-40">
        <div class = "flex gap-32 xl:gap-40">
            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>Nom équipe</p>
                    <p>13</p>
                </div>
            </div>

            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>Nom équipe</p>
                    <p>5</p>
                </div>
            </div>
        </div>

        <div class = "flex gap-32 xl:gap-40">
            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>Nom équipe</p>
                    <p>3</p>
                </div>
            </div>

            <div class="flex flex-row border-2 border-black rounded-md">
                <div class="bg-green-img text-white flex justify-center items-center w-8 rounded-l">
                    <div class="transform -rotate-90">
                        <p>DEMI</p>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-center bg-white rounded-r w-24 h-16 xl:w-32 xl:h-24">
                    <p>Nom équipe</p>
                    <p>8</p>
                </div>
            </div>
        </div>
    </div>`;

document.querySelector(".tournament").innerHTML = tournoi2023;

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

document.querySelector(".tournoi-select").addEventListener("change", (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedValue = selectedOption.value;

    const tournoi = document.querySelector(".tournament");

    if (selectedValue === "Tournoi 2023") {
        tournoi.innerHTML = "";
        tournoi.innerHTML = tournoi2023;
    } else if (selectedValue === "Tournoi 2022") {
        tournoi.innerHTML = "";
        tournoi.innerHTML = tournoi2022;
    }
});
