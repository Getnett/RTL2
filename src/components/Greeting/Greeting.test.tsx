import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Testing Greeting component", () => {
  it("renders Greeting component correctly", () => {
    render(<Greeting />);
  });

  // an example of using the within api
  it("displays a message within the wrapper element", async () => {
    const user = userEvent.setup();
    render(<Greeting />);
    const greetingBtn = screen.getByRole("button", { name: "Toggle Greeting" });
    await user.click(greetingBtn);
    const wrapperEle = screen.getByTestId("wrapper");
    const message = within(wrapperEle).getByText("Hi,Welcome!");
    expect(message).toBeInTheDocument();
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
