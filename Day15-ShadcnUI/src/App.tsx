import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Dashboard from "./components/dashboard-page";
import { LogoutDialog } from "./components/LogoutDialog";
import Sidebar from "@/components/sidebar";
import UsersPage from "@/components/users";
import ClientsPage from "@/components/clients";
import { BrowserRouter, Outlet, Routes } from "react-router-dom";
import { Route } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] =
    useState<"dashboard" | "users" | "clients">("dashboard");

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Layout ho yo <Outlet /> </p>}>
            <Route path="/" element={<p>This is dashboard</p>} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="flex min-h-svh">
        <Sidebar active={currentPage} onNavigate={setCurrentPage} />

        <main className="flex-1 p-6 space-y-4 bg-muted/30">
          <div className="flex items-center justify-between">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
              {currentPage === "dashboard" && "Dashboard"}
              {currentPage === "users" && "Users"}
              {currentPage === "clients" && "Clients"}
            </h1>

            <div className="flex items-center gap-2">
              <Button variant="destructive">Button</Button>
              <ModeToggle />
              <LogoutDialog />
            </div>
          </div>

          <section>
            {currentPage === "dashboard" && <Dashboard />}
            {currentPage === "users" && <UsersPage />}
            {currentPage === "clients" && <ClientsPage />}
          </section>
        </main>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
