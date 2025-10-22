import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 
import { toast } from "react-toastify";

  const [isLoading,setIsloading]=useState(false)
  
const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, 
      [name]: value
    })
  }

const navigate = useNavigate()

  const handleSubmit = async () => {
    setIsloading(true)
    try {
      const res = await axios.post("https://real-back-jkxe.onrender.com/register", formData)
      toast.success("You registered successfully")
      navigate("/login")
    } catch (error) {
      console.error(error)
      toast.error(error)
    } finally {
          setIsloading(false)
    }
    // setFormData({
    //    userName: "",
    //    email: "",
    //    password: "",
    // })
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-[400px] w-full">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
          }}  
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="border-zinc-300 border rounded-md py-2 pl-3"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-zinc-300 border rounded-md py-2 pl-3"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userName">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-zinc-300 border rounded-md py-2 pl-3"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              required

            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-green-600 py-3 text-white cursor-pointer"
          >
            {isLoading ? "Sending": "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
