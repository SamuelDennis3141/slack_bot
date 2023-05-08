"use strict";
import endpointData from "./endpoints.json";
import Endpoints from "./types";

export const endpoints = endpointData as Endpoints;

export const fetchApi = async (api: keyof Endpoints): Promise<string> => {
  const callApi = async () => {
    try {
      const apiBody = await fetch(url, options);
      return JSON.parse(await apiBody.text());
    } catch {
      throw new Error(`URL unresponsive`);
    }
  };

  const filteredJsonData = async () => {
    if (api === "randomFact") return jsonData.text;
    if (api === "dadJoke")
      return jsonData.body[0].setup + " " + jsonData.body[0].punchline;
  };

  const url = endpoints[api].url;
  const options = endpoints[api].options;
  const jsonData = await callApi();
  return filteredJsonData();
};
