import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import {
  About,
  ChangePassword,
  ForgotPassword,
  Login,
  ManageModel,
  ModelsList,
  ResetPassword,
} from "./pages";
import { PrivateInterfaceLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
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
          <Route path="/manage-model" element={<ManageModel />} />
          <Route path="/models-list" element={<ModelsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
