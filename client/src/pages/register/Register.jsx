import {useNavigate} from "react-router-dom";
import "./Register.scss"
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {...prev, 
        [e.target.name] :e.target.value
      }
    })
  }

  const handleSeller = (e) => {
    setUser((prev) => { 
      return {...prev, isSeller : e.target.checked};
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">

          <h1>Create Account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input 
            name="password" 
            type="password"
            placeholder="Password"
            onChange={handleChange} 
          />

          <label htmlFor="">Avatar</label>
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])} 
          />

          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Country"
            onChange={handleChange}
          />

          <button type="submit">Register</button>

        </div>
        <div className="right">

          <h1>Become Seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+84"
            onChange={handleChange}
          />

          <label htmlFor="">Description</label>
          <textarea
            placeholder="About yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          >
          </textarea>
        </div>
      </form>
    </div>
  )
}

export default Register
