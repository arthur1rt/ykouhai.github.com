document.addEventListener('DOMContentLoaded', function () {
    // Set music data
    var musicsDiv = document.querySelector("#musics");
    var prefab = document.querySelector("#musicPrefab");

    for (var config in musicData) {
        var config = musicData[config];
        var newMusic = prefab.cloneNode(true); // Cloning with children
        var pageLink = newMusic.querySelector("#musicPageLink");


        newMusic.classList.add("music-card"); // Add class

        // Set the title
        var titleElement = newMusic.querySelector(".music-card-title");
        titleElement.style.zIndex = 2;
        titleElement.textContent = config["title"];
        titleElement.style.fontSize = "2rem"; // Set default font size


        // Make the new music card visible
        newMusic.style.display = "";

        musicsDiv.appendChild(newMusic);

        // set page link
        if (config["page_name"]) {
            pageLink.href = "./" + config["page_name"]
        }

        // Set the background image with fading effect
        var imageSrc = config["image"];
        newMusic.style.setProperty("--bg-image", "url('" + imageSrc + "')"); // Set image as CSS variable
    }
});


