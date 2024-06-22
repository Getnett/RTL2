import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
// import Login from "./components/Login/Login";
// import Users from "./components/Users/Users";
import Greeting from "./components/Greeting/Greeting";
import TimerComponent from "./components/Timer/TimerComponent";
import GreetingEffect from "./components/GreetingEffect/GreetingEffect";
import ManageWinners from "./components/Winners/ManageWinners";
// import StateHook from "./hooks/State";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>Learning core react concepts and Testing</h1>
        {/* <Login /> */}
        {/* <Users /> */}
        {/* <Greeting /> */}
        {/* <GreetingEffect /> */}
        {/* <TimerComponent /> */}
        <ManageWinners />
      </QueryClientProvider>
    </div>
  );
}

export default App;
