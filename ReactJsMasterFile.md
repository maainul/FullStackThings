# React Master Files

## Topic 0.0 : Folder Structure

Creating a well-organized folder structure is crucial for maintaining a scalable and maintainable React.js project. While there is no one-size-fits-all solution, here are some best practices for structuring a React.js project:

### 1. Separate Components:

Create a components folder to store your reusable and presentational components.
Organize components based on their functionality or feature.
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
│   ├── Sidebar/
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   └── ...
```

### Pages or Views:

For pages or views, create a pages folder.
Each page may have its own subfolder for components and styles.
```
src/
├── pages/
│   ├── Home/
│   │   ├── Home.js
│   │   ├── Home.css
│   ├── About/
│   │   ├── About.js
│   │   ├── About.css
│   └── ...
```

### Services or Utilities:

Store utility functions, API calls, or other services in a services or utils folder.
```
src/
├── services/
│   ├── api.js
│   ├── auth.js
│   └── ...
```
### Redux (if using):

If using Redux, organize related actions, reducers, and constants together.
```
src/
├── redux/
│   ├── actions/
│   │   ├── userActions.js
│   ├── reducers/
│   │   ├── userReducer.js
│   ├── constants/
│   │   ├── actionTypes.js
```
### Styles:

Keep styles close to their corresponding components or pages.
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
```

### Assets:

Store static assets (images, fonts, etc.) in an assets folder.
```
src/
├── assets/
│   ├── images/
│   ├── fonts/
└── ...
```
### Routing:

If using client-side routing (e.g., React Router), you might have a separate routes or router folder.
```
src/
├── routes/
│   ├── AppRouter.js
└── ...
```

### Tests:

If writing tests, consider a tests or __tests__ folder.
```

src/
├── components/
├── tests/
│   ├── Header.test.js
└── ...
```
### Config and Environment:

Keep configuration files and environment variables in a dedicated folder.
```
src/
├── config/
│   ├── config.js
└── .env
```

### Top-Level Files:

Keep top-level files like index.js and App.js at the root.
```
src/
├── index.js
├── App.js
└── ...
```

Remember, the key is consistency. Choose a structure that fits your project and team preferences, and stick with it. Adjustments can always be made as the project evolves.


## Topic 0.1 : In Service What it Contains ?


In a React.js project, a "service" typically refers to a module or file responsible for handling certain types of logic or functionality, often related to data fetching, API calls, or other asynchronous operations. The specific contents of a service depend on the needs of your application, but here are some common elements you might find in a service:

### 1.API Calls:

Functions or methods for making HTTP requests to external APIs. This could involve using the fetch API or a third-party library like Axios.
```js
// services/api.js

const API_URL = 'https://api.example.com';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
```

### 2. Authentication:

If your application requires authentication, you might include functions for handling user authentication, login, and logout.
```js
// services/auth.js

export const login = async (credentials) => {
  // Logic for user login
};

export const logout = () => {
  // Logic for user logout
};
```

### 3.Utility Functions:

General utility functions that are used across different parts of your application. These could include helper functions for formatting data, handling errors, or other common tasks.

```js
// services/utils.js

export const formatData = (rawData) => {
  // Logic for formatting data
};

export const handleError = (error) => {
  // Logic for handling errors
};
```

### 4.WebSocket Connections:

If your application uses WebSockets, you might include functions for establishing and managing WebSocket connections.
```js
// services/socket.js

const socket = new WebSocket('wss://example.com/socket');

export const connectWebSocket = () => {
  // Logic for connecting to the WebSocket
};

export const sendMessage = (message) => {
  // Logic for sending messages via WebSocket
};

```

### 5.Caching and Local Storage:

Functions for caching data or storing information locally, such as in the browser's localStorage.
```js
// services/cache.js

export const cacheData = (key, data) => {
  // Logic for caching data
};

export const retrieveCachedData = (key) => {
  // Logic for retrieving cached data
};
```
### 6.Configuration:

Constants or functions related to configuration settings, such as API URLs or other environment-specific variables.
```
// services/config.js

export const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
Remember that the specific services you need will depend on the requirements of your application. Services are a way to encapsulate and modularize functionality, making your code more maintainable and easier to test.
```
## 0.2 : Topic Question : What Components and Service Contains ?
Handler functions in React components are where you handle user interactions and events. 
They can call service functions to perform tasks like data fetching, authentication, or other complex logic. This helps keep your components focused on the UI and behavior while delegating specific tasks to dedicated services.
```js
import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = async () => {
    try {
      // Use a service function within the event handler
      const newData = await fetchData();
      setData(newData);
    } catch (error) {
      console.error('Error handling button click:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default MyComponent;

```

## Topic 0.3 : Error Handling In React The Perfect Way .

### Basic Approach : 
```js
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing JSON:', error);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
};
```

1. Error Handling:

Handle errors gracefully. Check for errors in the HTTP response and throw an error if the response status is not within the success range (e.g., 200-299).

2. Handling JSON Parsing Errors:

Consider checking for JSON parsing errors. If the response is not valid JSON, the response.json() call may throw an error.

3. Timeouts:

Consider implementing a timeout mechanism to prevent the request from hanging indefinitely.

4. Request Headers:

If your API requires headers (e.g., authentication headers), include them in the fetch options.

```js
// services/api.js

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
const TIMEOUT_DURATION = 10000; // milliseconds

export const fetchData = async () => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), TIMEOUT_DURATION)
  );

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  };

  try {
    const responsePromise = fetch(`${API_URL}/data`, { headers });
    const response = await Promise.race([responsePromise, timeoutPromise]);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing JSON:', error);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
};

```

### Seperate Headers.js : For more Customization and Clean Code
```js
// services/headers.js

const getHeaders = (requestType = 'public') => {
  const headers = {
    'Content-Type': 'application/json',
    ...(requestType === 'private' && {'Authorization': 'Bearer YOUR_ACCESS_TOKEN'}),
  };

  return headers;
};

export default getHeaders;

```
```js
// services/api.js

import getHeaders from './headers';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
const TIMEOUT_DURATION = 10000; // milliseconds

export const fetchData = async (requestType = 'public') => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), TIMEOUT_DURATION)
  );

  const headers = getHeaders(requestType);

  try {
    const responsePromise = fetch(`${API_URL}/data`, { headers });
    const response = await Promise.race([responsePromise, timeoutPromise]);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing JSON:', error);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
};

```

### More Specific Error and Customize Error with error type:

```js

// services/api.js

import getHeaders from './headers';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
const TIMEOUT_DURATION = 10000; // milliseconds

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

class SyntaxApiError extends ApiError {
  constructor(message, status, syntaxError) {
    super(message, status);
    this.name = 'SyntaxApiError';
    this.syntaxError = syntaxError;
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

export const fetchData = async (requestType = 'public') => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new TimeoutError('Request timed out')), TIMEOUT_DURATION)
  );

  const headers = getHeaders(requestType);

  try {
    const responsePromise = fetch(`${API_URL}/data`, { headers });
    const response = await Promise.race([responsePromise, timeoutPromise]);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new ApiError(`Failed to fetch data. Status: ${response.status}`, response.status, errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TimeoutError) {
      console.error('Timeout error:', error);
      throw error;
    } else if (error instanceof ApiError) {
      console.error('ApiError:', error);
      throw error;
    } else if (error instanceof SyntaxError) {
      console.error('SyntaxError:', error);
      throw new SyntaxApiError(`Error parsing JSON: ${error.message}`, 500, error);
    } else {
      console.error('Unknown error:', error);
      throw new Error('Unknown error occurred');
    }
  }
};

```
### Create Separate File For Error
```js

// services/errors.js

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

class SyntaxApiError extends ApiError {
  constructor(message, status, syntaxError) {
    super(message, status);
    this.name = 'SyntaxApiError';
    this.syntaxError = syntaxError;
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

const handleApiError = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new ApiError(`Failed to fetch data. Status: ${response.status}`, response.status, errorMessage);
  }
};

export { ApiError, SyntaxApiError, TimeoutError, handleApiError };

```

```js

// services/api.js

import getHeaders from './headers';
import { ApiError, SyntaxApiError, TimeoutError, handleApiError } from './errors';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
const TIMEOUT_DURATION = 10000; // milliseconds

export const fetchData = async (requestType = 'public') => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new TimeoutError('Request timed out')), TIMEOUT_DURATION)
  );

  const headers = getHeaders(requestType);

  try {
    const responsePromise = fetch(`${API_URL}/data`, { headers });
    const response = await Promise.race([responsePromise, timeoutPromise]);

    await handleApiError(response);

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TimeoutError) {
      console.error('Timeout error:', error);
      throw error;
    } else if (error instanceof ApiError) {
      console.error('ApiError:', error);
      throw error;
    } else if (error instanceof SyntaxError) {
      console.error('SyntaxError:', error);
      throw new SyntaxApiError(`Error parsing JSON: ${error.message}`, 500, error);
    } else {
      console.error('Unknown error:', error);
      throw new Error('Unknown error occurred');
    }
  }
};

```

### At Last Create a Error Module Separately :
```js

// services/errors.js

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

class SyntaxApiError extends ApiError {
  constructor(message, status, syntaxError) {
    super(message, status);
    this.name = 'SyntaxApiError';
    this.syntaxError = syntaxError;
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

const handleApiError = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new ApiError(`Failed to fetch data. Status: ${response.status}`, response.status, errorMessage);
  }
};

const handleGenericError = (error) => {
  if (error instanceof TimeoutError) {
    console.error('Timeout error:', error);
    throw error;
  } else if (error instanceof ApiError) {
    console.error('ApiError:', error);
    throw error;
  } else if (error instanceof SyntaxError) {
    console.error('SyntaxError:', error);
    throw new SyntaxApiError(`Error parsing JSON: ${error.message}`, 500, error);
  } else {
    console.error('Unknown error:', error);
    throw new Error('Unknown error occurred');
  }
};

export { ApiError, SyntaxApiError, TimeoutError, handleApiError, handleGenericError };

```


```js
// services/api.js

import getHeaders from './headers';
import { handleApiError, handleGenericError, TimeoutError } from './errors';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
const TIMEOUT_DURATION = 10000; // milliseconds

export const fetchData = async (requestType = 'public') => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new TimeoutError('Request timed out')), TIMEOUT_DURATION)
  );

  const headers = getHeaders(requestType);

  try {
    const responsePromise = fetch(`${API_URL}/data`, { headers });
    const response = await Promise.race([responsePromise, timeoutPromise]);

    await handleApiError(response);

    const data = await response.json();
    return data;
  } catch (error) {
    handleGenericError(error);
  }
};

```
-----------------------------------------------------------------------------------------------------------------------
## Topic 1: React App Install :

1. Install react : 

        npx create-react-app client

2. Remove unnecessay Files

3. go inside client Folder 

        cd client

3. Install these dependencis :

        npm i axios react-router-dom redux react-redux


## Topic 2 : React Routing And Layout :

1. Create Folders :

![1](https://github.com/maainul/expense-management-system/assets/37740006/02a8e9ee-603d-4b27-8c4d-54c49333d778)


2. in Layout,Footer,Header Write Basic Functions:

### Footer.js
```js
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer-component'>
        <ul>
          <li> <Link>Footer 1</Link> </li>
          <li> <Link>Footer 2</Link> </li>
          <li> <Link>Footer 3</Link> </li>
          <li> <Link>Footer 4</Link> </li>
        </ul>
      </div>
    </>
  )
}

export default Footer
``` 
### Header.js
```js
import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_URL, REGISTER_URL } from '../../../Routes/URL'


const Header = () => {
  return (
    <>
      <div className='nav-bar'>
        <Link to={REGISTER_URL}>Register</Link>
        <Link to={LOGIN_URL}>Login</Link>
      </div>
    </>
  )
}

export default Header
```
### Layout.js
```js
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='content'>
                {children}
            </div>
            <Footer />

        </>
    )
}

export default Layout
```
3. In pages folder create new file called HomePage
```js
import React from 'react'
import Layout from '../components/layout/Layout'

const HomePage = () => {
    return (
        <Layout>
            <h1>Home Page</h1>
        </Layout>
    );
}

export default HomePage
```
### URL : http://localhost:3000/

![AfterLayout](https://github.com/maainul/expense-management-system/assets/37740006/e6ed55e6-c214-4d82-8562-48a9c4e3610e)

## Topic 3 : Create Form and Submit Data : Show in the Consloe.log

1. Create URL.js File to Store URL endpoints In the Routes Folder
### Routes\URL.js
```js
export const HOME_URL ='/'
export const REGISTER_URL ='/register'
export const LOGIN_URL ='/login'
export const USER_URL ='/user'


```

2. Create Pages For Login and Register
Plese Follow My Documentation For Better Understanding and Why Use This tecnique
<a href="https://github.com/maainul/FullStackThings/tree/main/REACT#copying-objects-with-the-spread-syntax"> Learn More </a>


### Login.js
```js

// Import Internal Dependencies
import React, { useState } from 'react'


const Login = () => {
    //Create Login Object and Default State
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })

    // Handle Form Change Value
    const handleUserNameChange = (e) => {
        setLoginData({
            ...loginData,
            userName: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setLoginData({
            ...loginData,
            password: e.target.value
        })
    }

    //  Form Submit 
    const handleSubmit = (values) => {
        values.preventDefault();
        console.log(values);
    }


    return (
        <>
            <div className='login-content'>
                {/* {loading && <Spinner />} */}
                <div className='title'>Login Form</div>
                <form onSubmit={handleSubmit}>
                    <div className='input-details'>
                        <div className='input-box'>
                            <span className='input-header'>User Name</span>
                            <input
                                type='text'
                                placeholder='Enter you username'
                                value={loginData.userName}
                                onChange={handleUserNameChange}
                            />
                        </div>
                        <div className='input-box'>
                            <span className='input-header'>Password</span>
                            <input
                                type='password'
                                placeholder='Enter your password'
                                value={loginData.password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type='submit' className='button login-button'>Submit</button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Login
```
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

## Registration URL : http://localhost:3000/register
![RegistrationData](https://github.com/maainul/expense-management-system/assets/37740006/a2fa272b-c1eb-41c6-8fd3-82dc7ced0468)

## Login URL : http://localhost:3000/login

![Login Data](https://github.com/maainul/expense-management-system/assets/37740006/ec1cd1a7-b16a-46db-b9cf-b66eb1c54f72)


### Full Code with call Backend API 
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
### Form Screen :

http://localhost:3000/register

![Capturee](https://github.com/maainul/expense-management-system/assets/37740006/e7960683-4246-43b4-b582-6224dcc1fef0)

### Mongodb :
![Capturey](https://github.com/maainul/expense-management-system/assets/37740006/eec0c25e-efaf-4ea0-b02e-bb08105aa1a8)

