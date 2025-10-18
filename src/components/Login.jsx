import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin,handleLogin } = useContext(AuthContext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate()
  const location = useLocation();

  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(" ");

    const email = e.target.email.value;
    const password = e.target.password.value;


    handleLogin(email, password)
    .then(res =>{
        const user = res.user;
        console.log(user)
        {
          location.state ? navigate(location.state.from): navigate('/')
        }
    })
    .catch(error =>{
        console.log('Error -> ', error.message)
        setError(error.message);
    })


  };


  const handleGooLogin = () =>{
      handleGoogleLogin()
      .then(res =>{
        {
          location.state ? navigate(location.state.from): navigate('/')
        }
      })
    }

  return (
    <div className="min-h-screen flex justify-center items-center px-10">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <fieldset className="fieldset space-y-2">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <div>
            <p className="link link-hover">
              Already have an account? Please{" "}
              <Link to="/register" className="text-blue-500 text-lg underline">
                Register
              </Link>
            </p>
          </div>
          <p>
            Login with{" "}
            <button className="btn btn-ghost" onClick={handleGooLogin}>
              Google
            </button>
          </p>
          <button type="submit" className="btn btn-neutral mt-4 w-[70%]">
            Login
          </button>
          {
            error && <p className="text-red-500">{error}</p>
          }
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
