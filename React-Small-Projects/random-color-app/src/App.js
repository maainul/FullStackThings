function App() {
  const handleEvent = (e) => {
    // console.log(document.querySelector("body"));
    
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div className="container">
        <h1>React Randon Background App</h1>
        <button onClick={handleEvent} className="btn">
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
