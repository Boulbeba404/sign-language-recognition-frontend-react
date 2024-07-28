import { useState } from "react";
import { AuthForm } from "../../components";
import { AuthAPI } from "../../apis";
import { toast } from "react-toastify";

function ForgotPassword() {
  const authApi = new AuthAPI();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authApi.sendEmailReset(email);
      toast.success("Email reset password sent successfully!")
    } catch (err) {
      console.error(err);
      toast.error("Email not found.");
    }
  };

  return (
    <AuthForm
      email={email}
      onChangeEmail={(value) => setEmail(value)}
      onSubmit={handleSubmit}
      type={"forgotPassword"}
    />
  );
}
export default ForgotPassword;
