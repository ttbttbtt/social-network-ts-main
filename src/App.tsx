import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistartionPage } from "./pages/RegistartionPage/RegistartionPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/rega',
    element: <RegistartionPage />
  },
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

const App: React.FC = () => {
  return (
    <div className="App">
      < RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
