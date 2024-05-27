import logo from "../../assets/logo.png";
function AuthForm({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  type,
}) {
  const title =
    type === "login"
      ? "Login"
      : type === "resetPassword"
      ? "Reset password"
      : "Forgot password";
  return (
    <div className="login-container">
      <div className="form-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>{title}</h1>
        <form onSubmit={onSubmit}>
          {(type === "login" || type === "forgotPassword") && (
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
            />
          )}
          {(type === "login" || type === "resetPassword") && (
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => onChangePassword(e.target.value)}
            />
          )}
          {type === "login" && (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <a className="text-link">Forgot Password?</a>
            </div>
          )}
          <button type="submit">{title}</button>
        </form>
      </div>
    </div>
  );
}
export default AuthForm;
