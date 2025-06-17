import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { signIn, googleSignIn, user, role, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        // const user = (result.user.email);
        console.log('sign in', result.user.email);
        const user = { email: email }
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User data saved to localStorage:", user);
        axios.post('http://localhost:3000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data)
          })


        navigate(from, { replace: true });

        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });

      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Google user data saved to localStorage:", user);
        Swal.fire({
          title: "Google Login Successful",
          text: `Welcome, ${user.displayName}!`,
          icon: "success",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
          },
        });


      });
  };

  return (
    <>
      <Helmet>
        <title>ManageMate |Login</title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="my-4 text-center">
              <p>Or</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full btn btn-outline"
              >
                Continue with Google
              </button>
            </div>
            <p className="ml-8 text-sm">
              <small>
                New here?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

