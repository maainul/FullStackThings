
## Contact Form - [Link](https://web.codeclimbjs.com/playground/react/re-contact-form)

```jsx
import React, { useState } from 'react';

export default function App() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[message,setMessage] = useState('')
  const[success,setSuccess] = useState('')
  const[errors,setErrors] = useState({})
  function saveFormData(e){
     e.preventDefault();
    let newErrors = {}
    if(!name){
      newErrors.name="Name should not be empty."
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
      newErrors.email="Enter email address"
    }
    else if (!emailRegex.test(email)) {
        newErrors.email = "Email should be a valid email address.";
    }
    if(!message){
      newErrors.message="Message should not be empty."
    }
    setErrors(newErrors)
   if(Object.keys(errors).length == 0){
     const formData = {name,email,message}
     setSuccess("Data Submit Successfull")
     setName('')
     setEmail('')
     setMessage('')
   }
    
  }
  

  
  return (
    <div className="container">
      <h2>Contact Form</h2>
    <form onSubmit={saveFormData}>
       <div>
         <label>Name</label>
         <input
          type="text"
           value={name}
           onChange={(e)=>{setName(e.target.value)}}
           name="name"
           />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
       </div>
        <div>
         <label>Email</label>
         <input
          type="text"
           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}
           name="email"
           />
          {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
       </div>
        <div>
         <label>Message</label>
         <textarea
          type="text"
           value={message}
           onChange={(e)=>{setMessage(e.target.value)}}
           name="message"
           />
          {errors.message && <p style={{color:'red'}} >{errors.message}</p>}
       </div>
     <button type="submit" >Submit</button>
     </form>
    </div>
  );
}

```