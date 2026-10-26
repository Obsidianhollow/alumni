import { useEffect, useState } from "react";
import "../css/AuthModal.css";

function AuthModal({
  isOpen,
  mode,
  onClose,
  onModeChange,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const isLogin = mode === "login";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Connect your backend / Firebase / Supabase
      authentication here.
    */

    console.log(
      isLogin
        ? "Login submitted"
        : "Signup submitted",
      formData
    );
  };

  const switchMode = () => {
    onModeChange(isLogin ? "signup" : "login");
  };

  return (
    <div
      className="auth-modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >

        {/* Close Button */}

        <button
          type="button"
          className="auth-modal-close"
          onClick={onClose}
          aria-label="Close authentication dialog"
        >
          ×
        </button>


        {/* Header */}

        <div className="auth-modal-header">

          <div className="auth-modal-eyebrow">
            Alumni Association
          </div>

          <h2 id="auth-modal-title">
            {isLogin
              ? "Welcome back."
              : "Join our community."}
          </h2>

          <p>
            {isLogin
              ? "Sign in to reconnect with your alumni community."
              : "Create your alumni account and stay connected."}
          </p>

        </div>


        {/* Form */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <div className="auth-field">

              <label htmlFor="auth-name">
                Full name
              </label>

              <input
                id="auth-name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>
          )}


          <div className="auth-field">

            <label htmlFor="auth-email">
              Email address
            </label>

            <input
              id="auth-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

          </div>


          <div className="auth-field">

            <div className="auth-label-row">

              <label htmlFor="auth-password">
                Password
              </label>

              {isLogin && (
                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    console.log(
                      "Forgot password"
                    );
                  }}
                >
                  Forgot password?
                </button>
              )}

            </div>

            <div className="password-wrapper">

              <input
                id="auth-password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete={
                  isLogin
                    ? "current-password"
                    : "new-password"
                }
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </div>


          {!isLogin && (
            <div className="auth-field">

              <label htmlFor="auth-confirm-password">
                Confirm password
              </label>

              <input
                id="auth-confirm-password"
                name="confirmPassword"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={
                  formData.confirmPassword
                }
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

            </div>
          )}


          {!isLogin && (
            <label className="terms-checkbox">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the terms and
                privacy policy.
              </span>

            </label>
          )}


          <button
            type="submit"
            className="auth-submit-button"
          >
            {isLogin
              ? "Sign in"
              : "Create account"}
          </button>

        </form>


        {/* Switch Login / Signup */}

        <div className="auth-switch">

          <span>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <button
            type="button"
            onClick={switchMode}
          >
            {isLogin
              ? "Sign up"
              : "Login"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AuthModal;