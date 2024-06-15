import { render, screen, act } from "@testing-library/react";
import TimerComponent from "./TimerComponent";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  // jest.runOnlyPendingTimers();
  // jest.useRealTimers();
  jest.clearAllTimers();
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
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<TimerComponent />);
    const alert = screen.getByRole("alert");
    const startBtn = screen.getByRole("button", { name: "Start Timer" });

    await user.click(startBtn);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(alert).toHaveTextContent("1");

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(alert).toHaveTextContent("2");
  });

  it("stops timer correctly", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<TimerComponent />);

    const alert = screen.getByRole("alert");
    const startBtn = screen.getByRole("button", { name: "Start Timer" });
    const stopBtn = screen.getByRole("button", { name: "Stop Timer" });

    await user.click(startBtn);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(alert).toHaveTextContent("1");

    await user.click(stopBtn);

    expect(alert).toHaveTextContent("0");
  });
});
