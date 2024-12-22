
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const{ loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-25">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-emerald-400"> VibeChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered text-emerald-400 h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
          <label className="label">
              <span className="textbase label-text">Password</span> 
            </label>
            <input 
            type='password'
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full input input-bordered text-emerald-400 h-10"
              
            />
            
            
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-emerald-400 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
          <button 
          className="btn btn-block btn-success"
          disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : 'Login'}
            
          </button>
          </div>
        </form>

      </div>

    </div>
  )
};

export default Login;


//starter code for this file


/*const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-25">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-emerald-400"> VibeChat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>

          <div>
          <label className="label">
              <span className="textbase label-text">Password</span> 
            </label>
            <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
            
            
          </div>
          <a href="#" className="text-sm hover:underline hover:text-emerald-400 mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
          <button className="btn btn-block btn-success">Login</button>
          </div>
        </form>

      </div>

    </div>
  )
};

export default Login;   */