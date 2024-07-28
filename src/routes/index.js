import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<About />} />
          <Route path="/start-recognition" element={<></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route
          element={
            <PrivateInterfaceLayout>
              <Outlet />
            </PrivateInterfaceLayout>
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
