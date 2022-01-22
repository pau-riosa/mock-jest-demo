import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./utils/api", () => {
  return {
    getHero: jest.fn().mockImplementation(() => {
      return { name: "Albedo" };
    }),
  };
});

test("renders learn react link", async () => {
  const { findByText } = render(<App />);
  const element = await findByText(/Albedo/i);
  expect(element).toBeInTheDocument();
});
