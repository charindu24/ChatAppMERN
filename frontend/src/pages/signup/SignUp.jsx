

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
            {/* Full name*/}
            <label className="label p-2">
              <span className="textbase label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John doe" className="w-full input input-bordered h-10" />
          </div>
          {/* Username*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
          </div>
          {/* Create a Password*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>
          {/* Confirm Password*/}
          <div>
            <label className="label p-2">
              <span className="textbase label-text">confirm Password</span>
            </label>
            <input type="text" placeholder="Confirm password" className="w-full input input-bordered h-10" />
          </div>
        </form>

      </div>

    </div>
  )
}

export default Signup;