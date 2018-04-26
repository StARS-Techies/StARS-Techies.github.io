Utils_GeneratePlayerHTML = config => (
    `<div class="audio-player-container">
        <p>${config.title}: ${config.description}</p>
        <audio class="player" controls>
            <source src="${config.url}" type="audio/${config.type}">
        </audio>
    </div>`
)