// wavesurfer object instantiation w/ properties
let wavesurfer = WaveSurfer.create({
    container: "#waveform",
    // The color can be either a simple CSS color or a Canvas gradient
    waveColor: 'plum',
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
    splitChannels: false,
    height: 350,
    responsive: 10,
    barHeight: 99,
    barWidth: 3
});

// load audio file
wavesurfer.load("audioFiles/blackbird.wav");

// playhead buttons
let playBtn = document.getElementById("play");
let resetBtn = document.getElementById("reset");

// beats array
let beats = ["audioFiles/blackbird.wav", "audioFiles/beat_mix1.mp3"];

// unordered list that will list out the beats
let beatsList = document.getElementById("beats");

// loop through the beats array to list out the beats onto the index page
for (let i = 0; i < beats.length; i++ ){

    // create child tags that will live inside the ul (beatsList)
    let createBeatsList = document.createElement("source");

    // set the source to the beats link
    createBeatsList.src = beats[i];

    // html to list out the beats
    createBeatsList.innerHTML = `beat ${i + 1}: ${beats[i].substring(11, beats[i].length - 4)}`;

    // append li with the array[index] to display on html
    beatsList.appendChild(createBeatsList);
}

// play && pause button toggle
playBtn.addEventListener("click", togglePlay);
function play() {
    wavesurfer.play();
}

// wavesurfer pause function
function pause() {
    wavesurfer.pause();
}

// wavesurfer play // pause function that toggles
function togglePlay() {
    if (!wavesurfer.isPlaying()) {
        play();
    } else if (wavesurfer.isPlaying()) {
        pause();
    }
}

// reset playhead
resetBtn.addEventListener("click", function() {
    wavesurfer.stop();
});

let beat = document.getElementsByTagName("source");
if (beat.length) {
}

for (let i = 0; i < beats.length; i++) {
    // console.log(beat);
    // console.log(beatSrc);

    // get the src from the beats object
    let beatSrc = beat[i].attributes.src.nodeValue;

    // assign eventlistener to listen to click
    beat[i].addEventListener("click", playBeat);

    // take the src and assign it to the wavesurfer.load();
    function playBeat() {
        // console.log(`beat: ${i + 1} clicked, the src is ${beatSrc}`);
        wavesurfer.load(`${beatSrc}`);
    }
}
