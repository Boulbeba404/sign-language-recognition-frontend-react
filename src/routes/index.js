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
  CreateModel,
  ModelsList,
  MyProfile,
  UsersList,
  ResetPassword,
  StartRecognition,
  UpdateModel,
  NotFound,
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
        {!accessToken && !refreshToken && !userId ? (
          <Route
            element={
              <PublicRouteRender>
                <Outlet />
              </PublicRouteRender>
            }
          >
            <Route path="/" element={<About />} />
            <Route path="/start-recognition" element={<StartRecognition />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/*" element={<NotFound/>} />
          </Route>
        ) : (
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
            <Route path="/create-model" element={<CreateModel />} />
            <Route path="/update-model/:id" element={<UpdateModel />} />
            <Route path="/models-list" element={<ModelsList />} />
            <Route path="/users-list" element={<UsersList />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/*" element={<NotFound/>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
