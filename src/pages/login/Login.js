import { useState } from "react";
import { AuthForm } from "../../components";
import { AuthAPI } from "../../apis";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks";

function Login() {
  const authApi = new AuthAPI();
  const { setAuthStore } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authApi.login(email, password);
      const { accessToken, refreshToken, userId } = response.data;
      setAuthStore(accessToken, refreshToken, userId);
    } catch (err) {
      console.error(err);
      toast.error("Erreur! Please verify your email or password");
    }
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
