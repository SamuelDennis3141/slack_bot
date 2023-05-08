import { fetchApi, endpoints } from "../api";

describe("fetchApi class", () => {
  it("should return a string for randomFact API", async () => {
    const randomFactApi = await fetchApi("randomFact");
    expect(typeof randomFactApi).toBe("string");
  });

  it("should return a string for dadJoke API", async () => {
    const dadJokeApi = await fetchApi("dadJoke");
    expect(typeof dadJokeApi).toBe("string");
  });

  it("should return an error when entering an incorrect ", () => {
    endpoints.randomFact.url = "fooBar";
    expect(async () => {
      const newApiCall = await fetchApi("randomFact");
    }).rejects.toThrow("URL unresponsive");
  });
});
