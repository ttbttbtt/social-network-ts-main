import React from "react";
import { RegistartionPage } from "./pages/RegistartionPage/RegistartionPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PostPage } from "./pages/PostPage/PostPage";

const routerConfig = createBrowserRouter([
  {
    path: "/rega",
    element: <RegistartionPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forget",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
