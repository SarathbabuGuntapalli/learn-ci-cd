import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Task Manager", () => {
  it("renders the application heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Welcome Sarath!",
      }),
    ).toBeInTheDocument();
  });

  it("allows a user to add a task", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByLabelText("Enter a task");

    await user.type(input, "Learn CI/CD");

    await user.click(screen.getByRole("button", { name: "Add Task" }));

    expect(screen.getByText("Learn CI/CD")).toBeInTheDocument();

    expect(screen.getByText("Total tasks: 1")).toBeInTheDocument();
  });
});
