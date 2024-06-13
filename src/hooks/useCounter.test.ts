import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("Test counter hook", () => {
  it("displays the initial value", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });

  it("displays the incremented value", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });

  it("displays the decremented value", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(9);
  });
});
