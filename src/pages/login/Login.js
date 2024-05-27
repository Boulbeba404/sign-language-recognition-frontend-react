import { useState } from "react";
import logo from "../../assets/logo.png"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        /// api
    };
    
    return (
        <div className="login-container">
            <div className="form-section">
                <div className="logo">
                    <img src="images.png" alt="Logo" /> { }
                </div>
                <h1>Welcome Back!</h1>
                <p>Please enter your details</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <div><a href="#">Forgot Password?</a></div>
                    <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
                </form>
            </div>
            <div className="graphic-section">
                <img src={logo} alt="Login Illustration" />
            </div>
        </div>
    )
}
export default Login