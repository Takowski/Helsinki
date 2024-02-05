const Header = ({ name }) => <h1>{name}</h1>

const Total = ({parts}) => {
  return(
    <div>
      <b>Total of {parts.reduce((total,part)=>total + part.exercises,0)} exercices</b>
    </div>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}


const Course = ({course}) =>
<div>
  <Header name={course.name} />
  <Content parts={course.parts}/>
  <Total parts={course.parts}/> 

</div> 


export default Course