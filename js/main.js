// short for $(document).ready(...)
$(() => {
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