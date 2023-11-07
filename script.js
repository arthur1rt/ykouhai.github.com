document.addEventListener('DOMContentLoaded', function () {
    // Set music data
    var musicsDiv = document.querySelector("#musics");
    var prefab = document.querySelector("#musicPrefab");

    for (var config in musicData) {
        var config = musicData[config];
        var newMusic = prefab.cloneNode(true); // Cloning with children

        newMusic.classList.add("music-card"); // Add class

        // Set the title
        var titleElement = newMusic.querySelector(".music-card-title");
        titleElement.style.zIndex = 2;
        titleElement.textContent = config["title"];
        titleElement.style.fontSize = "1.5rem"; // Set default font size


        // Make the new music card visible
        newMusic.style.display = "";

        musicsDiv.appendChild(newMusic);


        // Set the links
        var spotifyLink = newMusic.querySelector(".spotify-button");
        spotifyLink.href = config["spotify"];

        var youtubeLink = newMusic.querySelector(".youtube-button");
        youtubeLink.href = config["youtube"];

        var appleLink = newMusic.querySelector(".apple-music-button");
        appleLink.href = config["apple"];

        // Set the background image with fading effect
        var imageSrc = config["image"];
        newMusic.style.setProperty("--bg-image", "url('" + imageSrc + "')"); // Set image as CSS variable
    }
});
