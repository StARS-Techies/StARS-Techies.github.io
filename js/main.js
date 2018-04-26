// short for $(document).ready(...)
$(() => {
    const FBdb = new FBUtil();

    FBdb.getAllTracks()
    .then(tracks => {
        // Create players for each track
        Object.keys(tracks).forEach(trKey => {
            const track = tracks[trKey];
            const html = Utils_GeneratePlayerHTML(track);

            $('div.container').append(html);
        });

        // add styling & config for each player
        const players = plyr.setup('.player', {
            debug: false, // Output to console
            controls: [
                'play',
                'progress',
                'current-time',
                'mute', 
                'volume'
            ],
            hideControls: false // never hide status bottom status bar
        });
    });
});