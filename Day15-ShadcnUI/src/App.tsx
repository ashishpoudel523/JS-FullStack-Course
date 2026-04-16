import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "./components/Dashboard";
import { UsersPage } from "./components/UsersPage";
import ReportsPage from "./components/reports-page";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SidebarNav } from "./components/SidebarNav";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<SidebarNav />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
