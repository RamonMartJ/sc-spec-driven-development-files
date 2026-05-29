import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the clinic tagline as the level-1 heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /clinic where ai agents come to get relief/i,
      }),
    ).toBeInTheDocument();
  });

  it("introduces the core loop: ailments, therapies, appointments", () => {
    render(<Home />);

    const intro = screen.getByText(/check in with their ailments/i);
    expect(intro).toHaveTextContent(/browse therapies/i);
    expect(intro).toHaveTextContent(/book appointments/i);
  });

  it("lists the three common ailments under a labelled section", () => {
    render(<Home />);

    const section = screen.getByRole("region", {
      name: /common ailments we treat/i,
    });
    const ailments = within(section).getAllByRole("heading", { level: 3 });

    expect(ailments).toHaveLength(3);
    expect(ailments.map((h) => h.textContent)).toEqual([
      "Endless context windows",
      "Vague prompts",
      "3 a.m. refactors",
    ]);
  });

  it("renders a single main landmark for accessible page structure", () => {
    render(<Home />);

    expect(screen.getAllByRole("main")).toHaveLength(1);
  });
});
