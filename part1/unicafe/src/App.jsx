import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button><button>neutral</button><button>bad</button>
      <h1>Statistics</h1>
      <p>Good 0</p>
      <p>Neutral 0</p>
      <p>Bad 0</p>
    </div>
  )
}
export default App

