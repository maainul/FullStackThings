## Implement useToggle Hook - https://web.codeclimbjs.com/playground/react/re-use-toggle

```jsx
import React, { useState, useCallback } from "react";

// Custom hook to implement
const useToggle = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => {
    setState((ps) => !ps);
  }, []);
  return [state, toggle];
};

const App = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <h1>{isToggled ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default App;
```

## Number Guesser : https://web.codeclimbjs.com/playground/react/re-number-guesser

```js
import React, { useState } from "react";

const App = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [rand, setRand] = useState("");
  const handleGuess = () => {
    // Implementation here
    const randNumber = Math.floor(Math.random() * 5) + 1;
    const randStr = randNumber.toString();
    setRand(randStr);
    if (guess === randStr) {
      setMessage("Correct!");
    } else if (guess > randStr) {
      setMessage("Too high!");
    } else {
      setMessage("Too low!");
    }
  };

  return (
    <div>
      <h1>Number Guesser Game</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{rand}</p>
      <p>{message}</p>
    </div>
  );
};

export default App;
```

![image](https://github.com/user-attachments/assets/b1797e2f-f740-4d43-af0e-4f3a8f2a4009)

## BMI Calculator - https://web.codeclimbjs.com/playground/react/re-bmi-calculator

```jsx
import React, { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (
      isNaN(heightInMeters) ||
      isNaN(weightInKg) ||
      heightInMeters <= 0 ||
      weightInKg <= 0
    ) {
      setError("Please enter valid positive numbers for height and weight.");
      setBmi(null);
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setError("");
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height (cm):</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {error && <p className="error">{error}</p>}
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}
```

## Accordion - https://web.codeclimbjs.com/playground/react/re-faq-accordion

```jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking number provided in your email.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries around the world.",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggle(index) {
    console.log(index);
    console.log(activeIndex);
    if (index === activeIndex) {
      setActiveIndex(true); // Close the currently open question
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  }

  return (
    <div className="container">
      <h2>FAQ Accordion</h2>
      <ul>
        {faqs.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              background: "gray",
              padding: "10px",
            }}
          >
            <div
              onClick={() => toggle(index)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div style={{ marginTop: "5px" }}>{item.answer}</div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
```

## Flashcards - https://web.codeclimbjs.com/playground/react/re-flashcards
```jsx
import React, { useState } from 'react';

const flashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is the capital of Japan?', answer: 'Tokyo' }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function handleNext() {
    if (activeIndex < flashcards.length - 1) {
      setActiveIndex(activeIndex + 1);
      setFlipped(false); // Reset flip state when navigating to next card
    }
  }

  function handlePrevious() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setFlipped(false); // Reset flip state when navigating to previous card
    }
  }

  function toggleFlip() {
    setFlipped(!flipped);
  }

  return (
    <div className="container">
      <h2>Flashcards</h2>
      <div onClick={toggleFlip} style={{ cursor: 'pointer', perspective: '1000px' }}>
        <div
          style={{
            background: 'gray',
            height: '100px',
            width: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
             transition: 'transform 0.6s',
             transformStyle: 'preserve-3d',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', backfaceVisibility: 'hidden' }}>
            {flashcards[activeIndex].question}
          </div>
          <div
            style={{
              position: 'absolute',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            {flashcards[activeIndex].answer}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={handlePrevious} disabled={activeIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={activeIndex === flashcards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

```
## Contact Form - [Link](https://web.codeclimbjs.com/playground/react/re-contact-form)

```jsx

```