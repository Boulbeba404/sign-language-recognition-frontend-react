import { useState } from "react";
import { AuthForm } from "../../components";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /// api
  };

  return (
    <AuthForm
      password={password}
      onChangePassword={(value) => setPassword(value)}
      onSubmit={handleSubmit}
      type={"resetPassword"}
      confirmPassword={confirmPassword}
      onChangeConfirmPassword={(value) => setConfirmPassword(value)}
    />
  );
}
export default ResetPassword;
