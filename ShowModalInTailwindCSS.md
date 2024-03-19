# Modal  With Tailwind Css : Follow this Video if needed : https://www.youtube.com/watch?v=kcpe4kqZaKg&ab_channel=FullStackNiraj

1. install tailwind from this site : 
    https://tailwindcss.com/docs/guides/create-react-app

2. Update App.js / Your Componet where you want to show model
```js
import './App.css';
import MyModal from './MyModal';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button >Show Modal</button>
      <MyModal />
    </div>
  );
}

export default App;
```
3. Create Modal Form
```js
import React from 'react'

const MyModal = () => {
    return (
        <div className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-center items-center z-10'>

            <div className='bg-gray-200 w-80 p-5'>
                <form>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-1'>Name</label>
                        <input type='text' placeholder='Enter Your Name' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <div className=''>
                        <label className='block'>Password</label>
                        <input type='text' placeholder='Enter Your password' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <button type='submit' className='bg-green-500 text-white px-4 py-2 mt-4 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MyModal
```
4. Add lines in app.js to show modal 
```js
 const [showModal, setShowModal] = useState(false)
 <button onClick={() => setShowModal(true)}>Show Modal</button>
      <MyModal visible={showModal} />
 ```
5. Full Code
```js
import { useState } from 'react';
import './App.css';
import MyModal from './MyModal';

function App() {

  const [showModal, setShowModal] = useState(false)


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <MyModal visible={showModal} />
    </div>
  );
}

export default App;
```
6. Updae MyModal
```js
import React from 'react'

const MyModal = ({ visible }) => {
    if (!visible) return null
    return (
        <div className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-center items-center z-10'>

            <div className='bg-gray-200 w-80 p-5'>
                <form>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-1'>Name</label>
                        <input type='text' placeholder='Enter Your Name' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <div className=''>
                        <label className='block'>Password</label>
                        <input type='text' placeholder='Enter Your password' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <button type='submit' className='bg-green-500 text-white px-4 py-2 mt-4 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MyModal
```

7. Close Modal
```js
import { useState } from 'react';
import './App.css';
import MyModal from './MyModal';

function App() {

  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <MyModal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default App;
```
8. Update Modal For Close
```js
import React from 'react'
import { ReactComponent as CloseIcon } from './xmark-solid.svg';


const MyModal = ({ visible, onClose }) => {
    if (!visible) return null
    return (
        <div className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-center items-center z-10'>
            <div className='bg-gray-200 w-80 p-5'>
                <div className='flex justify-between text-red-500 font-bold text-lg'>
                    <div></div>
                    <CloseIcon className='w-4 fill-red-500 cursor-pointer hover:fill-red-600' onClick={onClose} />
                </div>
                <form>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-1'>Name</label>
                        <input type='text' placeholder='Enter Your Name' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <div className=''>
                        <label className='block'>Password</label>
                        <input type='text' placeholder='Enter Your password' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <button type='submit' className='bg-green-500 text-white px-4 py-2 mt-4 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MyModal
```

9. If any issue occured then add these lines.
```js

    const handleOnClose = (e) => {
        if (e.target.id === "container") {
            onClose()
        }
    }
    <div
            id='container'
            onClick={handleOnClose}
            className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-cente items-center z-10'>
```
10. If You want to close modal appart from click close icon

```js
import React from 'react'
import { ReactComponent as CloseIcon } from './xmark-solid.svg';


const MyModal = ({ visible, onClose }) => {
    if (!visible) return null

    const handleOnClose = (e) => {
        if (e.target.id === "container") {
            onClose()
        }
    }

    return (
        <div
            id='container'
            onClick={handleOnClose}
            className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-center items-center z-10'>
            <div className='bg-gray-200 w-80 p-5'>
                <div className='flex justify-between text-red-500 font-bold text-lg'>
                    <div></div>
                    <CloseIcon className='w-4 fill-red-500 cursor-pointer hover:fill-red-600' onClick={onClose} />
                </div>
                <form>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-1'>Name</label>
                        <input type='text' placeholder='Enter Your Name' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <div className=''>
                        <label className='block'>Password</label>
                        <input type='text' placeholder='Enter Your password' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <button type='submit' className='bg-green-500 text-white px-4 py-2 mt-4 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MyModal
```
