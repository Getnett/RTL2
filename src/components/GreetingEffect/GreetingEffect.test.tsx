import { render, screen } from "@testing-library/react";
import GreetingEffect from "./GreetingEffect";

describe("Testing <GreetingEffect/> component", () => {
  it("renders correctly without problems", () => {
    render(<GreetingEffect />);
  });
  it("displays a greeting message", () => {
    render(<GreetingEffect />);
    const message = screen.getByText("Hi,there!");
    expect(message).toBeInTheDocument();
  });
});
