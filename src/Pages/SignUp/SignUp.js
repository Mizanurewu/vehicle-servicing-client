import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
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
        <h1 className="text-5xl text-center font-bold">SignUp</h1>
          <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name='name'
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                name='password'
              />
            </div>
            
            <div className="form-control mt-6">
              <input className="btn btn-primary" type='submit' value='SignUp'/>
            </div>
          </form>
          <p className="text-center">Already have an account?  <Link to='/login' className="text-orange-600">Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;