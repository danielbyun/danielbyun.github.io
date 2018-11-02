let wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "goldenrodyellow",
    progressColor: 'black',
    scrollParent: true
});

wavesurfer.load("https://soundcloud.com/byunsta/tom-misch-inspired-beat");

let playBtn = document.getElementById("play");

playBtn.addEventListener("click", function() {
   wavesurfer.play();
});