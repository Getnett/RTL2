import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

// With additional test case added its not working - Check -> important

beforeEach(cleanup);

describe("Test cases for Login component", () => {
  it("renders Login component", () => {
    render(<Login />);
  });

  it("renders correctly all elements related to the Login component", () => {
    render(<Login />);
    // It has a label Log In
    const loginLabel = screen.getByRole("heading", { name: "Log In" });
    expect(loginLabel).toHaveTextContent("Log In");

    // It has a text input with Email label and with empty value initially
    const emailEle = screen.getByLabelText("Email");
    expect(emailEle).toHaveTextContent("");

    // It has a password input with Password label and with empty value initially
    const passwordEle = screen.getByLabelText("Password");
    expect(passwordEle).toHaveTextContent("");

    // It has a button with Sign In text
    const buttonEle = screen.getByRole("button", { name: "Sign In" });
    expect(buttonEle).toHaveTextContent("Sign In");
  });

  it("renders correctly typing in the inputs", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailEl = screen.getByLabelText("Email");
    const passwordEl = screen.getByLabelText("Password");
    act(async () => {
      await user.type(emailEl, "getendye@gmail.com");
      expect(emailEl).toHaveTextContent("getendye@gmail.com");
    });

    // Explore  more why like this!!!
    act(async () => {
      await user.type(passwordEl, "12345678");
      expect(passwordEl).toHaveDisplayValue("12345678");
    });
  });

  // TODO - Check
  // No idea why in this file only running 4 tests at time works not more than that

  it("renders correctly clicking the button will earse values in the inputs", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailEl = screen.getByLabelText("Email");
    const passwordEl = screen.getByLabelText("Password");
    const buttonEle = screen.getByRole("button", { name: "Sign In" });

    act(async () => {
      await user.type(emailEl, "getendye@gmail.com");
      expect(emailEl).toHaveTextContent("getendye@gmail.com");
    });
    act(async () => {
      await user.type(passwordEl, "12345678");
      expect(passwordEl).toHaveTextContent("12345678");
    });

    await user.click(buttonEle);
    expect(emailEl).toHaveTextContent("");
    expect(passwordEl).toHaveTextContent("");
  });
});
