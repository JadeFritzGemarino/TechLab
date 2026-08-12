import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./navbar";
import MainContent from "./main-content";
import LoginPage from "./login-page";
import SigninPage from "./sign-in-page";
import Mainmodules_content from "./modules-content";


const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainContent />} />
          
        </Route>

        {/* Routes without Navbar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/main-modules" element={<Mainmodules_content />} />
      </Routes>
    </BrowserRouter>
  );
}
