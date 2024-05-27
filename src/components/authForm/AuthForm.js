import logo from "../../assets/logo.png";

function AuthForm({
  email,
  password,
  confirmPassword,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
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
              className="password-input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => onChangePassword(e.target.value)}
            />
          )}
          {type === "resetPassword" && (
            <input
              className="confirm-password-input"
              type="password"
              id="password"
              name="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => onChangeConfirmPassword(e.target.value)}
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
