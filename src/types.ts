"use strict";

interface Endpoint {
  url: string;
  options: {
    method: string;
    headers?: {
      [key: string]: string;
    };
  };
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      signingSecret: string;
    }
  }
}

export default interface Endpoints {
  dadJoke: Endpoint;
  randomFact: Endpoint;
}
