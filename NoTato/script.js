// Function to dynamically load content based on the URL path
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page_name = path.replace("/", "").replace("/", "")

    let foundConfig = null;
    for (const config of musicData) {
        if (page_name === config['page_name']) {
            foundConfig = config;
            break; // Break out of the loop once the matching config is found
        }
    }

    if (foundConfig) {
        loadItemPage(foundConfig);
    } else {
        // Load a default or fallback content if no matching config is found
        console.log("page doesn't exist: " + page_name);
        loadItemPage(musicData[0]);
    }
});

function loadItemPage(config) {
    var prefab = document.querySelector("#musicPrefab");
    var musicsDiv = document.querySelector("#musics");


    var newMusic = prefab; // Cloning with children

    newMusic.classList.add("music-card"); // Add class

    // Set the title
    var titleElement = document.querySelector(".music-card-title");
    titleElement.style.zIndex = 2;
    titleElement.textContent = config["title"];
    titleElement.style.fontSize = "2rem"; // Set default font size


    // Make the new music card visible
    newMusic.style.display = "";

    // Set the links
    setUpOrRemoveButton(config, musicsDiv, ".spotify-button", "spotify")
    setUpOrRemoveButton(config, musicsDiv, ".presave-button", "pre-save")
    setUpOrRemoveButton(config, musicsDiv, ".apple-music-button", "apple")
    setUpOrRemoveButton(config, musicsDiv, ".youtube-button", "youtube")
    setUpOrRemoveButton(config, musicsDiv, ".amazon-music-button", "amazon")
    setUpOrRemoveButton(config, musicsDiv, ".deezer-button", "deezer")
    setUpOrRemoveButton(config, musicsDiv, ".tidal-button", "tidal")


    // Set the background image with fading effect
    var imageSrc = "../" + config["image"];
    newMusic.style.setProperty("--bg-image", "url('" + imageSrc + "')"); // Set image as CSS variable
}
function setUpOrRemoveButton(config, musicsDiv, buttonName, key) {
    button = musicsDiv.querySelector(buttonName);

    if (button) {
        if (config[key]) {
            button.href = config[key];
        } else {
            button.parentElement.remove()
        }
    }
}
