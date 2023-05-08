"use strict";

import { fetchApi } from "./api";
import { App } from "@slack/bolt";

export const slackBot = () => {
  const signingSecret = process.env["SLACK_SIGNING_SECRET"];
  const botToken = process.env["SLACK_BOT_TOKEN"];
  const app = new App({
    signingSecret: signingSecret,
    token: botToken,
  });

  (async () => {
    await app.start(process.env.PORT || 12000);
    app.message("fact", async ({ message, say }) => {
      const response = await fetchApi("randomFact");
      say(response);
    });
    app.message("joke", async ({ message, say }) => {
      const response = await fetchApi("dadJoke");
      say(response);
    });
  })();
};
