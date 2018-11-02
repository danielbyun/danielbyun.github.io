let wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "goldenrodyellow",
    progressColor: 'black',
    scrollParent: true
});

wavesurfer.load("https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

let playBtn = document.getElementById("play");

playBtn.addEventListener("click", function() {
   wavesurfer.play();
});