import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import {
  About,
  ChangePassword,
  ForgotPassword,
  Login,
  ManageModel,
  ModelsList,
  MyProfile,
  LanguagesList,
  ResetPassword,
} from "../pages";
import { PrivateInterfaceLayout } from "../components";
import { useAuth } from "../hooks";

function AppRoutes() {
  const { accessToken, refreshToken, userId } = useAuth();

  function PublicRouteRender(props) {
    return !accessToken && !refreshToken && !userId ? (
      props.children
    ) : (
      <Navigate to="/" />
    );
  }

  function PrivateRouteRender(props) {
    return !accessToken && !refreshToken && !userId ? (
      <Navigate to="/login" />
    ) : (
      props.children
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <Outlet />
            </PublicRouteRender>
          }
        >
          <Route path="/" element={<About />} />
          <Route path="/start-recognition" element={<></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route
          element={
            <PrivateRouteRender>
              <PrivateInterfaceLayout>
                <Outlet />
              </PrivateInterfaceLayout>
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<ModelsList />} />
          <Route path="/manage-model" element={<ManageModel />} />
          <Route path="/models-list" element={<ModelsList />} />
          <Route path="/languages-list" element={<LanguagesList />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
