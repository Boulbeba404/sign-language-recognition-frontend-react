import { useState } from "react";
import { AuthForm } from "../../components";
import { toast } from "react-toastify";
import { AuthAPI } from "../../apis";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const authApi = new AuthAPI();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authApi.resetPassword(token, password, confirmPassword);
      toast.success("Password changed successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Internal server error!");
    }
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
