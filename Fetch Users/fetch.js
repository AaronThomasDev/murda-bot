// Fetch chat users

var proxyUrl = "https://cors-anywhere.herokuapp.com/",
  targetUrl = "https://tmi.twitch.tv/group/user/sevadus/chatters";

fetch(proxyUrl + targetUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("something went wrong with retrieving JSON");
    console.error(error);
  });
