import { render, screen } from "@testing-library/react";
import App from "./App";

// jsdom lacks these browser APIs; stub the minimum the app touches.
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    ((query) => ({
      matches: query.includes("reduce"), // reduced motion → preloader skips straight through
      addListener: () => {},
      removeListener: () => {},
    }));
  window.scrollTo = () => {};
});

jest.mock("react-github-calendar", () => () => null);
jest.mock("react-pdf", () => ({
  Document: () => null,
  Page: () => null,
  pdfjs: { GlobalWorkerOptions: {}, version: "test" },
}));

test("renders the hero name and primary sections", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Shubhangi Bhosale/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^experience$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /bhosaleshubhangi333@gmail\.com/i })).toHaveAttribute(
    "href",
    "mailto:bhosaleshubhangi333@gmail.com"
  );
  expect(screen.getByRole("heading", { name: /toolkit/i })).toBeInTheDocument();
});
