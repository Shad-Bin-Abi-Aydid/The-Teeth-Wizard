import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { handleSignUp, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.ConfirmPassword.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password != conPassword) {
      setError("Password didn't Match");
      return;
    }
    if(!passwordRegex.test(password)){
        setError('Your password must have an small and capital letter and a digit')
        return
    }

    // Register the New user
    handleSignUp(email, password)
      .then((res) => {
        manageProfile(name, image)
        navigate('/')

      })
      .catch((error) => {
        console.log("Error => ", error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-10">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <fieldset className="fieldset space-y-2">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />

          <label className="label">Image</label>
          <input
            type="text"
            className="input"
            placeholder="image"
            name="image"
          />

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

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            name="ConfirmPassword"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <div>
            <a className="link link-hover">
              Already have an account? Please{" "}
              <Link to="/login" className="text-blue-500 text-lg underline">
                Login
              </Link>
            </a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4 w-[70%]">
            Register
          </button>
        </fieldset>
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
