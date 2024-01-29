import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    console.log('good now',newGood)
    setGood(newGood)
  } 
  const setToNeutral = (newNeutral) => {
    console.log('neutral now',newNeutral)
    setNeutral(newNeutral)
  } 
  const setToBad = (newBad) => {
    console.log('bad now',newBad)
    setBad(newBad)
  } 

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() =>setToGood(good +1)}>Good</button>
      <button onClick={() =>setToNeutral(neutral +1)}>neutral</button>
      <button onClick={() =>setToBad(bad +1)}>bad</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}
export default App

