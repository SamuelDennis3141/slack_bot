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

export default interface Endpoints {
  dadJoke: Endpoint;
  randomFact: Endpoint;
}
