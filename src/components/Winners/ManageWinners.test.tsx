import { render, screen } from "@testing-library/react";
import ManageWinners from "./ManageWinners";
import userEvent from "@testing-library/user-event";

describe("Integration test for <AddWinner/> and <DisplayWinner/> components", () => {
  it("should render components initital state correctly", () => {
    render(<ManageWinners />);
    const displayUserIsEmpty = screen.getByTestId("display-user");
    const textInput: HTMLInputElement = screen.getByLabelText("Add Winner");
    expect(displayUserIsEmpty).toHaveTextContent("");
    expect(textInput).toHaveValue("");
  });

  it("should render components correctly with state change", async () => {
    const user = userEvent.setup();
    render(<ManageWinners />);
    const displayUserIsEmpty = screen.getByTestId("display-user");
    const textInput: HTMLInputElement = screen.getByLabelText("Add Winner");
    expect(displayUserIsEmpty).toHaveTextContent("");
    expect(textInput).toHaveValue("");
    await user.type(textInput, "abc");
    expect(textInput).toHaveValue("abc");
    expect(displayUserIsEmpty).toHaveTextContent("abc");
  });
});
