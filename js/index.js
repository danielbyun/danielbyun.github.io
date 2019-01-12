// wavesurfer object instantiation w/ properties
let wavesurfer = WaveSurfer.create({
    container: "#waveform",
    // The color can be either a simple CSS color or a Canvas gradient
    waveColor: 'hsla(328, 100%, 85%, 1)',
    progressColor: 'hsla(200, 100%, 30%, 1)',
    cursorColor: '#efefef',
    splitChannels: false,
    height: 350,
    responsive: 10,
    barHeight: 99,
    barWidth: 3,
    normalize: true
    // backend: "MediaElement"
});

// load audio file
wavesurfer.load("audioFiles/blackbird.wav");

// playhead buttons
let playBtn = document.getElementById("play");
let resetBtn = document.getElementById("reset");

// play || pause button while playing
function playheadBtnColorPlaying() {
    playBtn.style.color = "hsla(200, 100%, 30%, 1)";
    resetBtn.style.color = "red";
}

// reset play || pause button back to original color
function playheadBtnColorReset() {
    playBtn.style.color = "#efefef";
}

// beats array
let beats = ["audioFiles/blackbird.wav", "audioFiles/beat.mp3", "audioFiles/tom misch type beat.wav"];

// unordered list that will list out the beats
let beatsList = document.getElementById("beats");

// loop through the beats array to list out the beats onto the index page
for (let i = 0; i < beats.length; i++) {

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

    // play button style when playing
    playheadBtnColorPlaying();
}

// wavesurfer pause function
function pause() {
    wavesurfer.pause();

    // play button style when paused
    playheadBtnColorReset();
}

// wavesurfer play // pause function that toggles
function togglePlay() {
    if (!wavesurfer.isPlaying()) {
        play();
    } else if (wavesurfer.isPlaying()) {
        pause();
    }
}

// when finished
wavesurfer.on('finish', function () {
    // change the playback button back to white
    playheadBtnColorReset();
});

// reset playhead
resetBtn.addEventListener("click", function () {
    wavesurfer.stop();
    playheadBtnColorReset();
    resetBtn.style.color = "#efefef";
});

let beat = document.getElementsByTagName("source");

for (let i = 0; i < beats.length; i++) {
    // get the src from the beats object
    let beatSrc = beat[i].attributes.src.nodeValue;

    // assign eventlistener to listen to click
    beat[i].addEventListener("click", playBeat);

    // take the src and assign it to the wavesurfer.load();
    function playBeat() {
        // console.log(`beat: ${i + 1} clicked, the src is ${beatSrc}`);
        wavesurfer.load(`${beatSrc}`);

        // reset play button color
        playheadBtnColorReset();
    }
}