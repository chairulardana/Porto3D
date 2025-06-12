import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./Router";
import Router from "./Router";
import SplashCursor from "./Components/SplashCursor/SplashCursor";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router />
        <SplashCursor />
    </QueryClientProvider>
  );
}

export default App;
