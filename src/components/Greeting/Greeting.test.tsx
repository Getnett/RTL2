import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Testing Greeting component", () => {
  it("renders Greeting correctly", () => {
    render(<Greeting />);
  });

  it("renders correctly appearing and disappearing of the alert", async () => {
    const user = userEvent.setup();
    render(<Greeting />);
    const greetingBtn = screen.getByRole("button", { name: "Toggle Greeting" });
    await user.click(greetingBtn);
    const alert = await screen.findByRole("alert"); // waiting for the element to appear
    expect(alert).toHaveTextContent("Hi,Welcome!");
    user.click(greetingBtn);
    waitForElementToBeRemoved(() => screen.queryByRole("alert")).then(() => {
      console.log("Element is removed from dom");
    }); // waiting for the element to dispear
  });
});
