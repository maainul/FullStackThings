# Form Data Submit Basic To Best

## 1. Create Register Component 


### Register.js
```js
// Import Internal Dependencies
import React, { useState } from 'react'

// Import External Dependencies
import { Link } from 'react-router-dom'


import { LOGIN_URL } from '../../Routes/URL';

const Register = () => {
    // Create registration Object
    const [regData, setRegData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    // Handle Field Change
    const handleNameChange = (e) => {
        setRegData({
            ...regData,
            userName: e.target.value
        })
    }
    const handleEmailChange = (e) => {
        setRegData({
            ...regData,
            email: e.target.value
        })
    }
    const handlePasswordChange = (e) => {
        setRegData({
            ...regData,
            password: e.target.value
        })
    }

    // Form Submit

    const handleSubmit = (values) => {
        values.preventDefault();
        console.log(values);
    }


    return (
        <>
            <div className="registration">
                <div className="title">Registration Form</div>
                <form onSubmit={handleSubmit}>
                    <div className="input-details">
                        <div className="input-box">
                            <span className="input-header"> Name </span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={regData.userName}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="input-box">
                            <span className="input-header"> Email</span>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                value={regData.email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input-box">
                            <span className="input-header"> Password</span>
                            <input
                                type="password"
                                placeholder="Enter User Name"
                                value={regData.password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="buttons">
                            <div className="already-register">
                                <span>Already Register? Please <Link to={LOGIN_URL}>Login</Link></span>
                            </div>
                            <div>
                                <button type="submit" className="button register-button">Submit </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register

```

## Update handleSubmit Function

```js
    // Form Submit
    const handleSubmit = async (inputValue) => {
        try {
            setLoading(true)
            axios.post(REG_API, inputValue)
            console.log('Registration Successfull');
            setLoading(false);
            navigate(LOGIN)
        } catch (error) {
            setLoading(false);
            console.log(`Invalid username and password  and Error Message = ${error}`);
        }

        console.log(regData);
    }

```