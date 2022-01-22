import { getHero } from "./api";

beforeEach(() => {
  fetch.resetMocks();
});

it("converts correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify({ name: "Albedo" }));

  const response = await getHero("albedo");

  expect(response).toEqual({ name: "Albedo" });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://api.genshin.dev/characters/albedo`
  );
});

it("catches errors and returns null", async () => {
  fetch.mockReject(() => "API failure");

  const response = await getHero("albed");

  expect(response).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://api.genshin.dev/characters/albed`
  );
});
