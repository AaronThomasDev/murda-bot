console.log("App Started");

import tmi from "tmi.js";
import { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } from "./constants.js";

const leftLane = [];
const rightLane = [];

const options = {
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [CHANNEL_NAME],
};

const client = new tmi.Client(options);

client.connect();

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "!hello") {
    // "@alca, heya!"
    client.say(channel, `@${tags.username}, heya!`);
  }

  // left vote
  if (message.toLowerCase() === "!left") {
    leftLane.push(tags.username);
    console.log(leftLane);
  }

  // right vote
  if (message.toLowerCase() === "!right") {
    rightLane.push(tags.username);
    console.log(rightLane);
  }
});
