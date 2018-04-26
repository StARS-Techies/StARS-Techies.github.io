// (function() {
$(() => {
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    // e.g. just plyr.setup(); and leave it at that if you have no need for events
    // var players = plyr.setup({
    const players = plyr.setup('.player', {
        // Output to console
        debug: false,
        controls: [
            // 'play-large',// don't allow start on video click
            'play',
            'progress',
            'current-time',
            'mute', 
            'volume'
            // 'captions',  // don't allow captions
            // 'fullscreen' // don't allow fullscreen
        ],
        hideControls: false // never hide status bottom status bar
    });
    const Player = players[0];

    // Play
    $('.js-play').click((e) => { 
        Player.play();
    });
    
    // Pause
    $('.js-pause').click((e) => {
        Player.pause();
    });
    
    // Stop
    $('.js-stop').click((e) => {
        Player.stop();
    });
    
    // Rewind
    $('.js-rewind').click((e) => {
        Player.rewind();
    });
    
    // Forward 
    $('.js-forward').click((e) => {
        Player.forward();
    });
});