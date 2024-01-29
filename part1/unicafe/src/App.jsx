import { useState } from 'react'

const Statistics =({good,neutral,bad,all}) => {
  
  const average = all !== 0 ? ((good - bad)/all) : 0;
   const positive = all !== 0 ? (good/all)*100 : 0;

if (all === 0){
  return (
    <>
    <h1>Statistics</h1>
    <h3>No feedback given</h3>
    </>
  ) 
}
  // const allResult= good+bad+neutral
  return ( 
    <>
          <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>all {all}</p>
      {/* <p>all {allResult}</p> */}
      <p>average {average} </p>
      <p>positive {positive} %</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)

  const setToGood = (newGood) => {
    console.log('good now',newGood)
    setGood(newGood)
    setToAll(all +1)
  } 
  const setToNeutral = (newNeutral) => {
    console.log('neutral now',newNeutral)
    setNeutral(newNeutral)
    setToAll(all +1)
  } 
  const setToBad = (newBad) => {
    console.log('bad now',newBad)
    setBad(newBad)
    setToAll(all +1)
  } 
  const setToAll = (newAll) => {
  console.log("all now", newAll)
  setAll(newAll)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() =>setToGood(good +1)}>Good</button>
      <button onClick={() =>setToNeutral(neutral +1)}>neutral</button>
      <button onClick={() =>setToBad(bad +1)}>bad</button>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      />
    </div>
  )
}
export default App

