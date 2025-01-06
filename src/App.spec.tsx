import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Kanban Board Integration", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders all columns with correct titles", () => {
    expect(screen.getByText("Todo")).toBeInTheDocument();
    expect(screen.getByText("In progress")).toBeInTheDocument();
    expect(screen.getByText("To test")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("displays initial tasks in correct columns", () => {
    // Check Done column tasks
    const doneColumn = screen.getByText("Done").closest("div");
    expect(doneColumn).toBeInTheDocument();
    expect(
      screen.getByText("Creer composants Card, Column")
    ).toBeInTheDocument();
    expect(screen.getByText("Ajouter draggable")).toBeInTheDocument();
    expect(screen.getByText("Ajouter droppable")).toBeInTheDocument();

    // Check Todo column tasks
    expect(screen.getByText("Rendre responsive")).toBeInTheDocument();

    // Check To Test column tasks
    expect(screen.getByText("Tester events")).toBeInTheDocument();
  });
});
