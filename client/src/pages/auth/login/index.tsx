import { useState } from "react";
import "../style.scss";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../utils/api/auth";
import Spinner from "../../../components/Spinner";
import { LoginInRequestPayload } from "../../../types";
import useFetch from "../../../hooks/useFetch";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [IsError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleGoogle, loading } = useFetch();

  const googlelogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogle(tokenResponse),
  });

  const loginHandler = async (event: any) => {
    setError(false);
    event.preventDefault();
    try {
      const formData: LoginInRequestPayload = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      setLoading(true);
      await login(formData);
      navigate("/dashboard");
    } catch (error: any) {
      setError(true);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner width="100px" height="100px" color/>
      ) : (
        <section className="login-signup">
          <h1 className="login-signup__heading">Login to MOOCs</h1>
          <div className="login-signup__google">
            <button
              className="login-signup__google__login-btn"
              onClick={() => googlelogin()}
            >
              Sign in with Google <FcGoogle />
            </button>
          </div>
          <div className="login-signup__hr-line">
            {" "}
            <hr />
            <h2 className="login-signup__hr-line__or">OR</h2>
            <hr />
          </div>

          <form
            className="login-signup__form"
            onSubmit={loginHandler}
            method="POST"
          >
            <div className="field">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={`${IsError && "error-input"}`}
              />
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                type={toggleVisibility ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
                className={`${IsError && "error-input"}`}
              />
              <button
                aria-label="toggle password"
                className="icon-button eye-icon"
                onClick={() => setToggleVisibility(!toggleVisibility)}
              >
                {toggleVisibility ? (
                  <MdOutlineVisibility />
                ) : (
                  <MdOutlineVisibilityOff />
                )}
              </button>
            </div>

            <div className="field button-field">
              <button>
                {isLoading ? <Spinner width="30px" height="30px" /> : "Login"}
              </button>
            </div>
          </form>
          <div className="login-signup__bottom">
            <Link
              to="/forgotpassword"
              className="login-signup__bottom-forgotpassword-link "
            >
              {" "}
              forgot password?
            </Link>
            <div className="login-signup__bottom-content">
              Don't have an account?{" "}
              <Link to="/signup" className="login-signup__bottom-content__link">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
