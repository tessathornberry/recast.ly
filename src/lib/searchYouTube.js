import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';


const server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get(server, {
    youtubeApiKey: YOUTUBE_API_KEY,
    q: query
  }).done(function (data) {
    callback ? callback(data) : null;
  }); //can add .fail()
};

export default searchYouTube;
