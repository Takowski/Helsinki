const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = ({ part, exercises }) => {
  return (
    <p> {part} {exercises} </p>
  )

}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}
const Total = ({ parts }) => {
  parts = parts.map(part => part.exercises)
  const [a, b, c] = parts
  const total = a + b + c

  return (
    <div>
      <p>Number of exercices {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
