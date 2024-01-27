# NODEJS : BACKEND

## 1. Node Server Creation :

Create Folder Structre : This is very basic folder structrue.I can Modified and updated.This is MVC Structure.

![1 FileStructure](https://github.com/maainul/expense-management-system/assets/37740006/d49d13aa-453f-49ba-9f08-5d39bccce403)

Package Initialization : 

        npm init -y (This will create package.json file)

Add Dependencies :

        npm i express nodemon colors morgan dotenv cors mongoose

Update Code For add the Nodemon in ther package.json file.
Folder will be like this :

![2 InitAndDependencyAdd](https://github.com/maainul/expense-management-system/assets/37740006/3855f5f1-a9e7-4db2-9a35-b7b49618231b)


Create .env file in the folder and add this line (PORT = 8080)

Basic Server Configuration server.js

```js
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')

//config dot env file
dotenv.config()


//rest object
const app = express();

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Hello from server</h1>")
})

//PORT
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,() =>{
    console.log(`Server rinning on port ${PORT}`);
})

```

## Topic : 2 : Connection With Mongodb database

1. Create cloud account on mongodb atlas.
2. Create username and password
3. Copy the connection string
4. Create File in the config folder. 
5. File Name (connectDB).
6. Update .env file and add info

```env
USERNAME = dbuname
PASSWORD = pass
DBNAME = db
CONNECTION_STRING =  mongodb+srv://dbuname:pass@cluster0.kaqyb0y.mongodb.net/db
```

### connectDB.js
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

6. Update Server Code : Add this two lines bellow.

```js
const connectDB = require('./config/connectDB')
//database call
connectDB();
```
### Full Code of server.js

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
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Hello from server</h1>")
})

//PORT
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,() =>{
    console.log(`Server rinning on port ${PORT}`);
})
```



## Topic 3 : How To Perform CRUD OPERATION :

### 0. Folder Structure :

Create Folder backend. Then run 

        npm init

Then run :
        
        npm i express cors morgan dotenv colors mongoose


![Capture1](https://github.com/maainul/expense-management-system/assets/37740006/09a588cd-39ed-4249-b379-f0d12c3a3568)

### 0. Create .env file in the root directory :
```env
PORT = 8080
USERNAME = uname
PASSWORD = pass
DBNAME = db
CONNECTION_STRING =  mongodb+srv://uname:pass@cluster0.kaqyb0y.mongodb.net/db

```

### 1. Define Models : userModel.js
```js
const mongoose = require('mongoose')

// schema design
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required and should be unique'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    }

});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

```

### 2. DB Connection : 
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

### 3. Server.js file : 
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

### 2. Routes : 

#### 2.1 : Define Apis 
```js
const LOGIN_API = '/login'
const REGISTER_API = '/register'
const GET_USERS_API = '/'

module.exports = {LOGIN_API,REGISTER_API,GET_USERS_API}
```
#### userRoutes.js : define routes
```js
const express = require('express')
const { registerController, getUsers } = require('../../controllers/userController')
const { LOGIN_API,REGISTER_API,GET_USERS_API, } = require('./api')

//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post(REGISTER_API, registerController)

// GET || GET USER
router.get(GET_USERS_API, getUsers)

module.exports = router

```
### userController.js
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

module.exports = {loginController,registerController,getUsers};
```
### Run Postmen with Get and Post Request :

        npm run server

1. http://localhost:8080/api/v1/users
2. http://localhost:8080/api/v1/users/register :

Method : POST

#### Headers :

        Content-Type : application/json

#### body :
```json
{
    "userName":"Mainul Hasan",
    "email" : "mainul080@gmail.com",
    "password":"123"
}
```
#### Result : 
```json
{
    "success": true,
    "newUser": {
        "userName": "Mainul Hasan",
        "email": "mainul080@gmail.com",
        "password": "123",
        "_id": "655a2dae6b26ef7980ba7482",
        "__v": 0
    }
}
```
