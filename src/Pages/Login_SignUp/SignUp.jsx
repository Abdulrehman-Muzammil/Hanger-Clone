import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth, db } from "../../FireBase/firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      let user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email,
          password,
          fname,
          lname,
        });
        toast.success("Sign Up Successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 300);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <div className="mt-[13vh] w-[100%] h-[90vh] bg-[#696969] flex justify-center items-center align-middle">
        <form
          onSubmit={handleSubmit}
          className=" py-[50px] w-[400px] m-auto flex-col gap-[10px] bg-white p-[10px] h-fit rounded-[10px] shadow-lg "
        >
          <h3 className="text-[35px] font-bold text-center">Sign Up</h3>

          <div className="mb-3 flex flex-col text-[17px]  ">
            <label>First name</label>
            <input
              type="text"
              className="form-control border p-[5px] rounded-[5px] border-[#b3b3b3] "
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 flex flex-col text-[17px]  ">
            <label>Last name</label>
            <input
              type="text"
              className="form-control border p-[5px] rounded-[5px] border-[#b3b3b3] "
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3 flex flex-col text-[17px]  ">
            <label>Email address</label>
            <input
              type="email"
              className="form-control border p-[5px] rounded-[5px] border-[#b3b3b3] "
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 flex flex-col text-[17px]  ">
            <label>Password</label>
            <input
              type="password"
              className="form-control border p-[5px] rounded-[5px] border-[#b3b3b3] "
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn bg-[blue] text-white p-[10px] w-[100%] rounded-[10px]"
            >
              Sign Up
            </button>
          </div>
          <p className=" text-center py-[10px]">
            Already registered{" "}
            <a href="/login" className="text-[red] ">
              Login
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
