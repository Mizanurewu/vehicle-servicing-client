import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/images/login/login.svg';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || '/';


    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
         console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true})
        })
        .catch(err=>console.error(err));
    }
  return (
    <div className="hero  bg-base-200 mb-10 w-full">
      <div className="hero-content gap-12 my-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
          <img className="w-3/4" src={login}/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
        <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name='email'
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name='password'
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type='submit' value='Login'/>
            </div>
          </form>
          <p className="text-center">Do not have an account?  <Link to='/signup' className="text-orange-600">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
