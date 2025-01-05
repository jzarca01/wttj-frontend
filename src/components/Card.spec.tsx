import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

import type { Task } from "../types";

describe("Card", () => {
  const mockTask: Task = {
    id: 1,
    title: "Test Task",
    description: "Test Description",
    status: "TODO",
  };

  it("renders the card with task title and description", () => {
    render(<Card task={mockTask} />);

    // Check if title is rendered
    expect(screen.getByText("Test Task")).toBeInTheDocument();

    // Check if description is rendered
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
