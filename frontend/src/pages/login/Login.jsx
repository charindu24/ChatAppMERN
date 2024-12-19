import { Link } from "react-router-dom";

const Login = () => {
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
            <input type="text" placeholder="Enter username" className="w-full input input-bordered text-emerald-400 h-10" />
          </div>

          <div>
          <label className="label">
              <span className="textbase label-text">Password</span> 
            </label>
            <input type="text" placeholder="Enter Password" className="w-full input input-bordered text-emerald-400 h-10" />
            
            
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-emerald-400 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
          <button className="btn btn-block btn-success">Login</button>
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