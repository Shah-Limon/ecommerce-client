import React from "react";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">Login Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
                
              </label>
              <input {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Password</span>
                
              </label>
              <input {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
              />
              
            </div>
          
            <input className="btn w-full  max-w-xs mt-3" type="submit" />
          </form>

          <div className="divider">OR</div>

          <button
            className="btn btn-outline btn-primary"
            onClick={() => signInWithGoogle()}
          >
            Join With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
