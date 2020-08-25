fetch("https://tmi.twitch.tv/group/user/darkosto/chatters")
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
