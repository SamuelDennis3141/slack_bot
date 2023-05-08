"use strict";

import { fetchApi } from "./api";
import { App, AwsLambdaReceiver } from "@slack/bolt";
import { Handler } from "aws-lambda";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SLACK_SIGNING_SECRET: string;
    }
  }
}

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

app.message("fact", async ({ message, say }) => {
  const response = await fetchApi("randomFact");
  say(response);
});

app.message("joke", async ({ message, say }) => {
  const response = await fetchApi("dadJoke");
  say(response);
});

export const handler: Handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
