import { useState } from 'react'

const StaticLine = ({ text, value }) =>

<tr>
<td>{text}</td>
<td>{value}</td>
</tr>

const Statistics = ({ good, neutral, bad, all }) => {
  const average = all !== 0 ? ((good - bad) / all) : 0;
  const positive = all !== 0 ? (good / all) * 100 : 0;
  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h3>No feedback given</h3>
      </>
    )
  }

  return (
    <>
      <table>
      <thead><h1>Statistics</h1></thead>
        <tbody>
      <StaticLine text="good" value={good} />
      <StaticLine text="neutral" value={neutral} />
      <StaticLine text="bad" value={bad} />
      <StaticLine text="all" value={all} />
      <StaticLine text="average" value={average} />
      <StaticLine text="positive" value={positive + " %"} />
      </tbody>
      </table>
    </>
  )
}
const ButtonHandle = ({ setGood, setNeutral, setBad, setToAll, good, neutral, bad, all }) => {

  const setToGood = (newGood) => {
    console.log('good now', newGood)
    setGood(newGood)
    setToAll(all + 1)
  }
  const setToNeutral = (newNeutral) => {
    console.log('neutral now', newNeutral)
    setNeutral(newNeutral)
    setToAll(all + 1)
  }
  const setToBad = (newBad) => {
    console.log('bad now', newBad)
    setBad(newBad)
    setToAll(all + 1)
  }
  return (
    <>
      <button onClick={() => setToGood(good + 1)}>Good</button>
      <button onClick={() => setToNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setToBad(bad + 1)}>bad</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const setToAll = (newAll) => {
    console.log("all now", newAll)
    setAll(newAll)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <ButtonHandle
        setGood={setGood}
        setBad={setBad}
        setNeutral={setNeutral}
        setToAll={setToAll}
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}

      />
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

