import { useState } from 'react'

const AnecdoteDays = ({ anecdotes, selected, points }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>
    </div>
  )
}

const AnecdoteMost = ({ anecdotes, points, maxVoteIndex }) => {
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      {points.every(point => point === 0) ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <p>{anecdotes[maxVoteIndex]}</p>
          <p>has {points[maxVoteIndex]} votes</p>
        </div>
      )}
    </div>
  )
}


const Button = ({ setSelected, handleVote, selected, random }) => {
  return (
    <div>
      <button onClick={() => handleVote(selected)}>vote </button>
      <button onClick={() => setSelected(random())}>next anecdotes</button>
    </div>
  );
}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const max = anecdotes.length;
  const random = () => Math.floor(Math.random() * max)

  const [selected, setSelected] = useState(random())
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  const handleVote = (index) => {
    const newPoints = [...points]
    newPoints[index] += 1
    setPoints(newPoints)
    console.log("newPoints", newPoints)
  }
  const maxVoteIndex = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)

  console.log("Anecdote with the most votes:", anecdotes[maxVoteIndex])

  console.log(selected)
  console.log("points", points)

  return (
    <div>
      <AnecdoteDays anecdotes={anecdotes} points={points} selected={selected} random={random} />
      <Button setSelected={setSelected} anecdotes={anecdotes} handleVote={handleVote} selected={selected} random={random} />
      <AnecdoteMost anecdotes={anecdotes} points={points} selected={selected} maxVoteIndex={maxVoteIndex} />

    </div>
  )
}

export default App