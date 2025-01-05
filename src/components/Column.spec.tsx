import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Column } from "./Column";

import type { Task, Column as ColumnType } from "../types";

describe("Column", () => {
  const mockTasks: Task[] = [
    { id: 1, title: "Task 1", description: "Description 1", status: "TODO" },
    { id: 2, title: "Task 2", description: "Description 2", status: "TODO" },
  ];

  const mockColumn: ColumnType = {
    title: "To Do",
    id: "TODO",
  };

  it("renders column title correctly", () => {
    render(<Column column={mockColumn} tasks={mockTasks} />);
    expect(screen.getByText("To Do")).toBeInTheDocument();
  });

  it("renders all tasks passed as props", () => {
    render(<Column column={mockColumn} tasks={mockTasks} />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("renders correctly with empty tasks array", () => {
    render(<Column column={mockColumn} tasks={[]} />);

    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });
});
