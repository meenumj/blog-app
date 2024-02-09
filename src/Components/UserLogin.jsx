import axios from 'axios'
import React, { useState } from 'react'


const UserLogin = () => {
    const [input,setInput] = new useState(
        {
          "Email":"",
          "Password":""
        }
      )
      const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
      }
      const readValues = async()=>{
        console.log(input)
        const response = await axios.post("http://localhost:3001/api/blog/signin",input)
        console.log(response.data)

        if (response.data.status == "success") {

            alert("Login Successful")
                setInput({
                    "Email": "",
                    "Password": ""
                })
                window.location.href="/viewresume"
            
        } else {
            alert("Invalid Email or Password")
                setInput({
                    "Email": "",
                    "Password": ""
                })
        }
    
      }
  return (
    <div>
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>Login Here</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                        <input type="text" className="form-control" name="Email" value={input.Email} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-end">
                        <button className="btn btn-success" onClick={readValues}>Login</button>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={() => window.location.href = '/signup'}>New User</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
