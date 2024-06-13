import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, cleanup } from "@testing-library/react";
import Users from "./Users";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([{ id: 1, name: "Getnet", email: "test@example.com" }])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Test cases for Users component", () => {
  const queryClient = new QueryClient();
  it("renders Users component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
  });

  it("renders loading indicator while fetching the data", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();
  });

  it("renders users in the list when data is fetched", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
    const usersList = await screen.findByRole("list");
    const userItems = await screen.findAllByRole("listitem");
    expect(usersList).toBeInTheDocument();
    expect(userItems.length).toBe(1);
  });

  it("displays an error message when something wrong with fetching users data", async () => {
    const queryClient = new QueryClient();

    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500, "Error"));
        }
      )
    );

    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );

    const message = await screen.findByTestId("error");
    expect(message).toBeInTheDocument();
  });
});
