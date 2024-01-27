# Error Handling In React The Perfect Way .

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