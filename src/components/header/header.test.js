import React from "react";
import { render } from "../../test/test-utils";
import Header from "./header";

it("Renders the header container", () => {
  const { getByTestId } = render(<Header />);
  const headerContainer = getByTestId("header-container");
  expect(headerContainer).toBeTruthy();
});
it("Renders the header logo", () => {
  const { getByTestId } = render(<Header />);
  const headerLogo = getByTestId("header-logo-img");
  expect(headerLogo).toBeTruthy();
});
it("Renders the header title", () => {
  const { getByTestId } = render(<Header />);
  const headerTitle = getByTestId("header-title");
  expect(headerTitle).toBeTruthy();
});
it("Renders the header cog image", () => {
  const { getByTestId } = render(<Header />);
  const headerCogImage = getByTestId("header-cog-img");
  expect(headerCogImage).toBeTruthy();
});
