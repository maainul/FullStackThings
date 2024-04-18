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
