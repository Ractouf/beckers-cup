const progressBar = document.querySelector("#progress-bar");
const slider = document.querySelector("#slider");
const sliderImages = document.querySelectorAll("#slider > img");
const imageViewer = document.querySelector("#image-viewer");
const largeImage = document.querySelector("#large-image");
const closeButton = document.querySelector("#close-button");
const form = document.querySelector("form");
const selectElement = document.querySelector("select");
const teamsScores = document.querySelector("#teams-scores");
const teams2024 = [
    {
        "Papillon de lumière": {
            membres: [
                "Cédric",
                "Lucia",
                "Kenza",
                "Vincent"
            ],
            scores: [
                7
            ],
            indexes: [
                4,
                0
            ]
        }
    },
    {
        "Myrtilles": {
            membres: [
                "Françoise",
                "François",
                "Lucie",
                "Stéphanie"
            ],
            scores: [
                0
            ],
            indexes: [
                5,
                3
            ]
        }
    },
    {
        "El gato": {
            membres: [
                "Maëva",
                "Marine",
                "Jean-Phillipe"
            ],
            scores: [
                7
            ],
            indexes: [
                6,
                1
            ]
        }
    },
    {
        "Les projecteurs": {
            membres: [
                "Brieuc",
                "Pierre",
                "Mamy"
            ],
            scores: [
                0
            ],
            indexes: [
                7,
                2
            ]
        }
    },
];
const teams2023 = [
    {
        "Les Espillons": {
            membres: [
                "François",
                "Maëva",
                "Cédric",
                "Mamy"
            ],
            scores: [
                5,
                1
            ],
            indexes: [
                4,
                2
            ]
        }
    },
    {
        "Les Équilibrés": {
            membres: [
                "Marine",
                "Pierre",
                "Jean-Phillipe",
                "Lucia"
            ],
            scores: [
                8,
                8
            ],
            indexes: [
                5,
                0
            ]
        }
    },
    {
        "Les Mistinguettes": {
            membres: [
                "Emma",
                "Lucie",
                "Stéphanie",
                "Françoise"
            ],
            scores: [
                0,
                9
            ],
            indexes: [
                6,
                3
            ]
        }
    },
    {
        "Les Birch": {
            membres: [
                "Kenza",
                "Brieuc",
                "Vincent"
            ],
            scores: [
                9,
                4
            ],
            indexes: [
                7,
                1
            ]
        }
    },
];
const teams2022 = [
    {
        "Glasses": {
            membres: [
                "Cédric",
                "Emma",
                "Vincent",
                "Stéphanie",
            ],
            scores: [
                8,
                9
            ],
            indexes: [
                4,
                0
            ]
        }
    },
    {
        "Skoda": {
            membres: [
                "Jean-Phillipe",
                "Maëva",
                "Pierre",
                "Françoise",
            ],
            scores: [
                5,
                8
            ],
            indexes: [
                5,
                3
            ]
        }
    },
    {
        "Sangliers": {
            membres: [
                "Maxence",
                "Marine",
                "Lucie",
                "François",
            ],
            scores: [
                3,
                5
            ],
            indexes: [
                6,
                2
            ]
        }
    },
    {
        "Vanupieds": {
            membres: [
                "Kenza",
                "Brieuc",
                "Mamy",
                "Lucia",
            ],
            scores: [
                8,
                5
            ],
            indexes: [
                7,
                1
            ]
        }
    },
];
const tournoiEmpty = `
    <div id = "finales">
        <div class = "match-container">
            <div class = "match-text-container">
                <p class = "match-text">FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
            </div>
        </div>
        <div class = "match-container consolation-game">
            <div class = "match-text-container">
                <p class = "match-text">P.FINALE</p>
            </div>

            <div class = "match-teams-container">
                <div class = "match-top-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
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
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
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
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
                <div class = "match-bottom-team-container">
                    <p class = "match-team-score scores"></p>
                    <p class = "teams">?</p>
                </div>
            </div>
        </div>
    </div>`;
const resultsEmpty = `
    <h2 class = "header">Résultats</h2>
    <div id = "teams-scores-div">
        <div id = "teams">
            <div>
                <div class = "team">
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class = "team">
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>
                <div class = "team">
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class = "team">
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
        <div id = "scores">
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Équipe</th>
                        <th>Points</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td>
                            <svg class = "result-svg" viewBox="0 0 120 120">
                                <style type="text/css">
                                    .st0{fill:#E24255;}
                                    .st1{fill:#61b6d5;}
                                    .st2{fill:#34a2ce;}
                                    .st3{fill:#FFFFFF;}
                                </style>
                                <g>
                                    <polygon class="st0" points="79.7,45.6 60,55.5 40.3,45.6 15.9,94.3 31.1,92.8 38.9,105.9 60,63.9 81.1,105.9 88.9,92.8    104.1,94.3  "/>
                                    <circle class="st1" cx="60" cy="46.4" r="32.2"/>
                                    <circle class="st2" cx="60" cy="46.4" r="25.3"/>
                                    <path class="st3" d="M61.2,31.2l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,62.6c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,30.2,60.7,30.2,61.2,31.2z"/>
                                </g>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td>
                            <svg class = "result-svg" viewBox="0 0 120 120">
                                <style type="text/css">
                                    .st4{fill:#E24255;}
                                    .st5{fill:#FFC54D;}
                                    .st6{fill:#E8B04B;}
                                    .st7{fill:#FFFFFF;}
                                </style>
                                <g>
                                    <polygon class="st4" points="79.7,45.6 60,55.5 40.3,45.6 15.9,94.3 31.1,92.8 38.9,105.9 60,63.9 81.1,105.9 88.9,92.8    104.1,94.3  "/>
                                    <circle class="st5" cx="60" cy="46.4" r="32.2"/>
                                    <circle class="st6" cx="60" cy="46.4" r="25.3"/>
                                    <path class="st7" d="M61.2,31.2l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,62.6c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,30.2,60.7,30.2,61.2,31.2z"/>
                                </g>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td>
                            <svg class = "result-svg" viewBox="0 0 120 120">
                                <style type="text/css">
                                    .st8{fill:#FFBF4B;}
                                    .st9{fill:#EDEDED;}
                                    .st10{fill:#BCBCBC;}
                                    .st11{fill:#FFFFFF;}
                                </style>
                                <g>
                                    <polygon class="st8" points="79.7,45.6 60,55.5 40.3,45.6 15.9,94.3 31.1,92.8 38.9,105.9 60,63.9 81.1,105.9 88.9,92.8    104.1,94.3  "/>
                                    <circle class="st9" cx="60" cy="46.4" r="32.2"/>
                                    <circle class="st10" cx="60" cy="46.4" r="25.3"/>
                                    <path class="st11" d="M61.2,31.2l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,62.6c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,30.2,60.7,30.2,61.2,31.2z"/>
                                </g>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td></td>
                        <td></td>
                        <td>
                            <svg class = "result-svg" viewBox="0 0 120 120">
                                <style type="text/css">
                                    \t.st12{fill:#C4C4C4;}
                                    \t.st13{fill:#E5B97F;}
                                    \t.st14{fill:#C19A6B;}
                                    \t.st15{fill:#FFFFFF;}
                                </style>
                                <g>
                                    <polygon class="st12" points="79.7,45.6 60,55.5 40.3,45.6 15.9,94.3 31.1,92.8 38.9,105.9 60,63.9 81.1,105.9 88.9,92.8    104.1,94.3  "/>
                                    <circle class="st13" cx="60" cy="46.4" r="32.2"/>
                                    <circle class="st14" cx="60" cy="46.4" r="25.3"/>
                                    <path class="st15" d="M61.2,31.2l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,62.6c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,30.2,60.7,30.2,61.2,31.2z"/>
                                </g>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`;
let intervalID;

/**
 * @param year to display
 *  Fills the tournament results based on year.
 */
function displayResult(year) {
    const scores = document.querySelectorAll(".scores");
    const teams = document.querySelectorAll(".teams");

    teamsScores.innerHTML = resultsEmpty;

    let results = [[], [], [], []];

    year.forEach((team, index) => {
        const teamName = Object.keys(team)[0];
        const teamData = team[teamName];

        scores[teamData.indexes[0]].textContent = teamData.scores[0];
        teams[teamData.indexes[0]].textContent = teamName;

        if (teamData.indexes[1] !== undefined) {
            scores[teamData.indexes[1]].textContent = teamData.scores[1];
            teams[teamData.indexes[1]].textContent = teamName;
        }

        const teamContainer = document.querySelectorAll(".team")[index];
        teamContainer.children[0].textContent = teamName;

        teamData.membres.forEach((member, memberIndex) => {
            teamContainer.children[memberIndex + 1].textContent = member;
        });

        results[index][0] = teamName;
        results[index][1] = (teamData.scores[1] ?? 0) + (teamData.scores[0] ?? 0);
    });

    results.sort((a, b) => a[1] - b[1]).reverse();

    const tableBody = document.querySelector("tbody");
    results.forEach((result, index) => {
        tableBody.children[index].children[1].textContent = results[index][0];
        tableBody.children[index].children[2].textContent = results[index][1];
    });
}

/**
 * Displays the tournament based on the <select> value.
 */
function chooseTournament() {
    const selectedOption = selectElement.value;

    const tournoi = document.querySelector("#tournament");

    tournoi.innerHTML = "";
    tournoi.innerHTML = tournoiEmpty;
    teamsScores.innerHTML = "";

    if (selectedOption === '2024') {
        displayResult(teams2024);
    } else if (selectedOption === '2023') {
        displayResult(teams2023);
    } else if (selectedOption === '2022') {
        displayResult(teams2022);
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
    const teamsElements = document.querySelector("#create-team").children;

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
