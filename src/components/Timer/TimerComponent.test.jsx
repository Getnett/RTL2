import { render, screen } from "@testing-library/react";
import TimerComponent from "./TimerComponent";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
describe("Testing TimerComponent", () => {
  it("renders component correctly", () => {
    render(<TimerComponent />);
  });

  it("renders initial  JSX elements correctly", () => {
    render(<TimerComponent />);
    const alert = screen.getByRole("alert");
    const startBtn = screen.getByRole("button", { name: "Start Timer" });
    const stopBtn = screen.getByRole("button", { name: "Stop Timer" });

    expect(alert).toHaveTextContent("0");
    expect(startBtn).toBeInTheDocument();
    expect(stopBtn).toBeInTheDocument();
  });

  it("displays correctly the timer", async () => {
    // 1)
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<TimerComponent />);
    const alert = screen.getByRole("alert");
    const startBtn = screen.getByRole("button", { name: "Start Timer" });
    // const stopBtn = screen.getByRole("button", { name: "Stop Timer" });
    await user.click(startBtn);

    // 2)

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(alert).toHaveTextContent("1");
    // expect(startBtn).toBeInTheDocument();
    // expect(stopBtn).toBeInTheDocument();
  });
});
