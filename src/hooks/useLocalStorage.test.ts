import { act, renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("Testing useLocalStorage hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("Retrieves the initial value from local storage if it exists", () => {
    localStorage.setItem("name", "localStorageInitialValue");
    const { result } = renderHook(() => useLocalStorage("name", ""));
    expect(result.current.value).toBe("localStorageInitialValue");
  });

  it("Uses the initialValue argument if the key is not found in local storage", () => {
    const { result } = renderHook(() => useLocalStorage("name", ""));
    expect(result.current.value).toBe("");
  });

  it("Updates the value in local storage when the value is updated", () => {
    const { result } = renderHook(() => useLocalStorage("name", ""));
    expect(result.current.value).toBe("");
    act(() => {
      result.current.setValue("Getnet");
    });
    expect(localStorage.getItem("name")).toBe("Getnet");
  });

  it("Retrieves the updated value from local storage", () => {
    const { result } = renderHook(() => useLocalStorage("name", ""));
    expect(result.current.value).toBe("");
    act(() => {
      result.current.setValue("Getnet");
    });
    expect(result.current.value).toBe("Getnet");
  });

  it("Keeps last updated  value in local storage even if the component re-renders", () => {
    const { result, rerender } = renderHook(() => useLocalStorage("name", ""));
    expect(result.current.value).toBe("");
    act(() => {
      result.current.setValue("Getnet");
    });
    rerender();
    expect(localStorage.getItem("name")).toBe("Getnet");
  });
});
