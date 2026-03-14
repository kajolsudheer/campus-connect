'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('STUDENT');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'STUDENT') {
      router.push('/student');
    } else if (role === 'FACULTY') {
      router.push('/faculty');
    } else if (role === 'ADMIN') {
      router.push('/admin');
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}. Please check your inbox.`);
    setIsForgotPassword(false);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        {/* Animated Background Elements */}
        <div className="shape shape-1 animate-float"></div>
        <div className="shape shape-2 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="login-glass-panel glass-panel animate-fade-in">
        <div className="login-header">
          <h1 className="logo-title">Campus<span className="text-primary">Connect</span></h1>
          <p className="login-subtitle">
            {isForgotPassword ? "Enter your email to reset password" : "Welcome back! Please login to your account."}
          </p>
        </div>

        {isForgotPassword ? (
          <form className="login-form animate-fade-in" onSubmit={handleReset}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="Enter your registered email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                suppressHydrationWarning
              />
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              Send Reset Link
            </button>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsForgotPassword(false)}>
                ← Back to Login
              </button>
            </div>
          </form>
        ) : (
          <form className="login-form animate-fade-in" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">I am a</label>
              <select 
                className="form-input form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Email or Username</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                suppressHydrationWarning
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                suppressHydrationWarning
              />
            </div>

            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" suppressHydrationWarning />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault(); setIsForgotPassword(true); }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary login-btn">
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
