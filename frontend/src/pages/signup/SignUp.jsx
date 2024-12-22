import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import userSignup from "../../hooks/useSignup.js";


const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword:'',
    gender:''
  });

  const { loading, signup } = userSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };



  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-25">
        <h1 className="text-3xl font-semibold text-center text-white">
          SignUp
          <span className="text-emerald-400"> VibeChat</span>
        </h1>
        
        <form onSubmit={handleSubmit}>
        <div>
            {/* Full name*/}
            <label className="label p-2">
              <span className="textbase label-text">Full Name</span>
            </label>
            <input type="name" placeholder="John doe" className="w-full input input-bordered h-10 text-emerald-400"
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          {/* Username*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Username</span>
            </label>
            <input type="username" placeholder="Username" className="w-full input input-bordered text-emerald-400 h-10"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>
          {/* Create a Password*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered text-emerald-400 h-10"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>
          {/* Confirm Password*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered text-emerald-400 h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-emerald-400 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
          <button className="btn btn-block btn-sm mt-2 border btn-success"
          disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default Signup;

//Starter code for the signup components
{/*
import GenderCheckbox from "./GenderCheckbox";


const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-25">
        <h1 className="text-3xl font-semibold text-center text-white">
          SignUp
          <span className="text-emerald-400"> VibeChat</span>
        </h1>
        
        <form>
        <div>
            //Full name
            <label className="label p-2">
              <span className="textbase label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John doe" className="w-full input input-bordered h-10 text-emerald-400" />
          </div>
          //Username
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="w-full input input-bordered text-emerald-400 h-10" />
          </div>
          //Create a Password
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="w-full input input-bordered text-emerald-400 h-10" />
          </div>
          //Confirm Password
          <div>
            <label className="label p-2">
              <span className="textbase label-text">confirm Password</span>
            </label>
            <input type="text" placeholder="Confirm password" className="w-full input input-bordered text-emerald-400 h-10" />
          </div>

          <GenderCheckbox />




          <a href="#" className="text-sm hover:underline hover:text-emerald-400 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
          <button className="btn btn-block btn-sm mt-2 border btn-success">Sign Up</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Signup;
*/}
