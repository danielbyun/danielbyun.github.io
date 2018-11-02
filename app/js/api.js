$(document).ready(function() {
//     // spotify API key
//     let spotifyUrl = "https://api.spotify.com/v1/tracks/";
//     get tracks from a playlist
    let tracksFromPlaylist = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks/";
    let spotifyClientId = "1054ae2e99f144e788f709fcb4dd4b8e";
    let spotifyClientSecret = "24cbab3be53943baa41a7aef9b685193";
    let authToken = "BQAAnT1tnFLLpGf8ecKVxOG6hKnucb2tTUm-shSp6SkaDfBy58IvR-3DX9iPxji5rUHMclsdjvKbLcOBpyJirVizK0w8SWbZRxGDkhP44apk3o_lFbKAGzvR8ZgXh8Zl7enbPQoKIWwTvhT02g";

    let accessToken = "BQAun_H45W-WmzONqdlT7vcypmYUlY49JX3vhVgnJtypfRXcX7nHnoKJWhdNpowwL7qVjVh59H9AxUKJBGPQQ3qy-HTOkAXTz2Xt3T8I60wjGNXr7ybmHHTQRgO0qIcKCqu4pOUBLg2zVqFI2aKwrpoUQXQWcdMoYdVp&refresh_token=AQCh54EOYpIcgsTkgBoUEXPLW60QqrbUJGCHuQwMSA3Mi2C-kQDoDjTAZDx5H7MpkBAbZPohiE0VJOAnitZy7z9oqvknnX-ky2fNmofAIEWH99Mpllsa9iHLNCacLQL28E8LTw";

//     let url = `${spotifyUrl}${spotifyClientId}`;
//
//     // $.getJSON(spotifyUrl, function(data) {
//     //     console.log(data);
//     // });
//
//      $("#drawBtn").click(function() {
//          $.ajax({
//              type: "GET",
//              url: spotifyUrl + "0C0XlULifJtAgn6ZNCW2eu",
//              id: "0C0XlULifJtAgn6ZNCW2eu",
//              market:"es",
//              async: true,
//              dataType: "json",
//              headers: {'Authorization': 'Bearer' + authToken},
//          }).done(function(data) {
//              console.log(data);
//          })
//      })
//
//
});

// load the http library
// let http = require("http");

// create an http server to handle responses
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("hello world");
//     response.end();
// }).listen(8888);