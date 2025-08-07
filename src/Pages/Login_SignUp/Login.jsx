import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../FireBase/firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>
  {
e.preventDefault();
try {
  await signInWithEmailAndPassword(auth, email,password)
  window.location.href='/'
} catch (error) {
   toast.error(error.message, {
          position: "bottom-center",
        });
}
  }
  return (
    <>
    <div className=" mt-[13vh]  w-[100%] h-[90vh] bg-[#696969] flex justify-center items-center align-middle">
     <form onSubmit={handleSubmit} className='mt-[17vh] py-[50px] w-[400px] m-auto flex-col gap-[10px]  bg-white p-[10px] h-fit rounded-[10px] shadow-lg  ' >
      <h3 className='text-[35px] font-bold text-center'>Login</h3>

      <div className="mb-3 flex flex-col text-[17px]  ">
        <label>Email address</label>
        <input
          type="email"
          className=" border p-[5px] rounded-[5px] border-[#b3b3b3]"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3 flex  flex-col text-[17px] ">
        <label>Password</label>
        <input
          type="password"
          className="form-control border p-[5px] rounded-[5px] border-[#b3b3b3] "
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid flex flex-col text-[17px] ">
        <button type="submit" className="btn bg-[blue] text-white p-[10px] w-[100%] rounded-[10px]">
          Submit
        </button>
      </div>
      <p className="forgot-password text-center py-[10px]">
        New user <a href="/signup" className='text-[red]'>Register Here</a>
      </p>
      {/* <SignInwithGoogle/> */}
    </form>
    </div>
    </>

  )
}

export default Login
