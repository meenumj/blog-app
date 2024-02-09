import axios from 'axios'
import React, { useState } from 'react'

const Addpost = () => {
    const [input,setInput] = new useState(
        
        {   
            "UserID":"",
                "Post": ""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/post/add",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Post Added Successfully")
            setInput(  {   
                "UserID":"",
                "Post": ""
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
                       <br /><br /> <h1><center>Add Post</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">User ID</label>
                        <input type="text" className="form-control" name="UserID" value={input.UserID} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Post</label>
                        <textarea name="Post"  cols="30" rows="5" className="form-control" value={input.Post} onChange={inputHandler} ></textarea>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Add Post</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={() => window.location.href = '/viewpost'}>View Post</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addpost
