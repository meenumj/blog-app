import axios from 'axios'
import React, { useState } from 'react'

const UserSignup = () => {
    const [input,setInput] = new useState(
        
        {   
            "Name":"",
                "Age": "",
                "Mobile":"",
                "Address":"",
                "Pincode":"",
                "Email":"",
                "Password":""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/blog/signup",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Registration Successful")
            setInput(  {   
                "Name":"",
                    "Age": "",
                    "Mobile":"",
                    "Address":"",
                    "Pincode":"",
                    "Email":"",
                    "Password":""
                   }
                
                   )
                   window.location.href="/"
        } else {
            alert("Something went wrong")
        }
    })
}
  return (
    <div>
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>New User Registrarion</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" name="Age" value={input.Age} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name="Mobile" value={input.Mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name="Address" value={input.Address} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="text" className="form-control" name="Pincode" value={input.Pincode} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" className="form-control" name="Email" value={input.Email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
