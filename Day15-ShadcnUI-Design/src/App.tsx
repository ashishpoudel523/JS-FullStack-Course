import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant={"default"}>Click me</Button>
        <div className="text-red-500 text-xl font-bold">
          Tailwind is working
        </div>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          People stopped telling jokes
        </h4>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
