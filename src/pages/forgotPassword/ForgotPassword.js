import { useState } from "react";
import { AuthForm } from "../../components";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /// api
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
