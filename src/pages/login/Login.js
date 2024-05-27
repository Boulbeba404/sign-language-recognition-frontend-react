import { useState } from "react";
import { AuthForm } from "../../components";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /// api
  };

  return (
    <AuthForm
      email={email}
      password={password}
      onChangeEmail={(value) => setEmail(value)}
      onChangePassword={(value) => setPassword(value)}
      onSubmit={handleSubmit}
      type={"login"}
    />
  );
}
export default Login;
