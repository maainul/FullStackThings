# 💖🏹💖Connect Frontend and Backend🏃‍♂️🏃‍♂️🎈

# Backend Server :

![1](https://github.com/maainul/expense-management-system/assets/37740006/fd28499a-1ace-436e-9153-3e6ca5356a74)


## 1. Make folder 
    
    server
   
## 2. Type 

    npm init -y
    
## 3. Install Dependencies : 
       
        npm i colors cors dotenv express mongoose morgan nodemon
   
## 4. Update config :
   
        "server": "nodemon server.js"
    
## 5. Create .env File :
   
```env
    PORT = 8080
    USERNAME = uname
    PASSWORD = pass
    DBNAME = dbname
    CONNECTION_STRING = mongodb+srv://uname:pass@cluster0.kaqyb0y.mongodb.net/dbname
```
## 6. connectDB.js : MongoDB Config 

```js
const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`server running on ${mongoose.connection.name}`.bgCyan.white)
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}

module.exports = connectDB;
```
## 7.  Server.js :
   
```js
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/connectDB')


//config dot env file
dotenv.config()

//database call
connectDB();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//routes
// All User Routes
app.use('/api/v1/users', require('./routes/user/userRouter'))

//PORT
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgBlue);
})
```   
## 8. userRouter.js : Define Router

### First Define APi in seperate file.api.js

```js
const LOGIN_API = '/login'
const REGISTER_API = '/register'
const GET_USERS_API = '/'

module.exports = {LOGIN_API,REGISTER_API,GET_USERS_API}
```

### userRouter.js
```js
const express = require('express')
const { registerController, getUsers } = require('../../controllers/userController')
const { REGISTER_API, GET_USERS_API } = require('./api')

//router object
const router = express.Router()

// POST || REGISTER USER
router.post(REGISTER_API, registerController)

// GET || GET USER
router.get(GET_USERS_API, getUsers)

module.exports = router

```  
## 9. Controller Register and GetUsersController
```js
const userModel = require('../models/userModel')

// Register Callback
const registerController = async(req,res) =>{
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({success:true,newUser})
    } catch (error) {
        res.status(400).json({
            success:false,
            error : error.message
        })   
    }
}

const getUsers = (req, res) => {
    res.send({
      success: true,
      message: "Data Coming From MVC Pattern",
    });
  };

module.exports = {registerController,getUsers};
```
## 10. Open Postman : 
![Capture](https://github.com/maainul/expense-management-system/assets/37740006/3cbd9546-1ad4-4ac5-9ab1-cb9e57f00548)

##  Headers

Content-Type : application/json

### URL : END-POINT :

http://localhost:8080/api/v1/users/register

# 🧇🥗🧀Frontend : React ⏳🧰💖

## 1. Create React App :

        npx create-react-app client

## 2. Run Client :

        npm start

## 3. Install New Dependencies :

        npm i axios react-router-dom

## 4. App.js : Update App js 
```js
/* ***************************************************** 
This is called Mixed Approach : Import Based on Types 
 1. Import Internal dependencies (Alphabetical Order)
 2. Import External party dependencies (Alphabetical Order)
 3. Import from Pages (Alphabetical Order)
 4. Import From Components (Alphabetical Order)
 5. Import From Constants (Alphabetical Order)

 *******************************************************/
// External dependecies 
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import Pages


// Import Constants
import {REGISTER_URL, USER_URL } from './Routes/URL';

import Register from './Pages/Register/Register';
import User from './Pages/Register/User';

function App() {
  return (
    <>
      <Routes>
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path={USER_URL} element={<User />} />
      </Routes>
    </>
  );
}

export default App;
```
### User.js
```js
import axios from 'axios';
import React from 'react'

const User = () => {
    axios
        .get("http://localhost:8080/api/v1/users")
        .then(function (response) {
            console.log(response.data.message);
        });
    return (
        <>
            <h1>Hi there </h1>
        </>
    )
}

export default User
```
### Register.js
```js
// Import Internal Dependencies
import React, { useState } from 'react'

// Import External Dependencies
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

// Import Components

// import { REG_API } from '../../Services/Config';
import { LOGIN_URL } from '../../Routes/URL';
import Spinner from '../../components/Spinner/Spinner';

const Register = () => {
    // For one page to another page redirect
    const navigate = useNavigate();
    console.log("register page hit")

    // loading state for show the spinner
    const [loading, setLoading] = useState(false)

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
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const {response} = await axios.post("http://localhost:8080/api/v1/users/register", regData)
            console.log("Res Data  :", response.data)
            console.log('Registration Successfull');
            setLoading(false);
            navigate(LOGIN_URL)
        } catch (error) {
            setLoading(false);
            console.log(`Invalid username and password  and Error Message = ${error}`);
        }

        console.log(regData);
    }


    return (
        <>
            <div className="registration">
                {loading && <Spinner />}
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