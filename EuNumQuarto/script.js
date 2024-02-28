// Function to dynamically load content based on the URL path
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page_name = getPageName(path.substring(1))
    alert(page_name)
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
        console.log("page doesn't exist")
    }
});

function getPageName(url) {
    // Create a URL object
    const parsedUrl = new URL(url);
    // Get the pathname and split it by slashes
    const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment.trim() !== '');
    // Return the last segment of the path
    return pathSegments.pop();
}

function loadItemPage(config) {
    var prefab = document.querySelector("#musicPrefab");
    var musicsDiv = document.querySelector("#musics");


    var newMusic = prefab; // Cloning with children

    newMusic.classList.add("music-card"); // Add class

    // Set the title
    var titleElement = document.querySelector(".music-card-title");
    titleElement.style.zIndex = 2;
    titleElement.textContent = config["title"];
    titleElement.style.fontSize = "2.5rem"; // Set default font size


    // Make the new music card visible
    newMusic.style.display = "";

    var spotifyLink = musicsDiv.querySelector(".spotify-button");
    var youtubeLink = musicsDiv.querySelector(".youtube-button");
    var appleLink = musicsDiv.querySelector(".apple-music-button");
    var presaveLink = musicsDiv.querySelector(".presave-button");

    // Set the links
    if (config["pre-save"]) {
        spotifyLink.parentElement.remove()
        youtubeLink.parentElement.remove()
        appleLink.parentElement.remove()

        presaveLink.href = config["pre-save"];
    } else {
        presaveLink.parentElement.remove()

        spotifyLink.href = config["spotify"];
        youtubeLink.href = config["youtube"];
        appleLink.href = config["apple"];
    }

    // Set the background image with fading effect
    var imageSrc = "../" + config["image"];
    newMusic.style.setProperty("--bg-image", "url('" + imageSrc + "')"); // Set image as CSS variable
}

