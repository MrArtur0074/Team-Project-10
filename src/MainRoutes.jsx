import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateLayout from "./components/Layout/PrivateLayout";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import FriendsPage from "./pages/FriendsPage";
import CoursesPage from "./pages/CoursesPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";

// Mock authentication status (Replace with actual logic)
const isAuthenticated = true;

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/register", element: <RegisterPage />, id: 2 },
    { link: "/login", element: <LoginPage />, id: 3 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/main", element: <MainPage />, id: 1 },
    { link: "/friends", element: <FriendsPage />, id: 2 },
    { link: "/courses", element: <CoursesPage />, id: 3 },
    { link: "/posts", element: <PostPage />, id: 4 },
    { link: "/profile/:id", element: <ProfilePage />, id: 5 },
  ];

  return (
    <Routes>
      {/* Public Routes */}
      {PUBLIC_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={<Layout>{item.element}</Layout>}
          key={item.id}
        />
      ))}

      {/* Private Routes */}
      {PRIVATE_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            isAuthenticated ? (
              <PrivateLayout>{item.element}</PrivateLayout>
            ) : (
              <LoginPage />
            )
          }
          key={item.id}
        />
      ))}

      {/* Catch-All Not Found Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
