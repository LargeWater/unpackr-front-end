import { Link } from "react-router-dom";

const Index = (props) => {
  console.log("PROPS: ", props)
  return (
    <>
    {props.lectures.map(lecture => (
      <div key={lecture._id}>
        <h1>{lecture.subject}</h1>
        <p>Takeaway: {lecture.takeaway}</p>
        <p>Struggle: {lecture.painpoint}</p>
        <Link to={`/lectures/${lecture._id}` } key={lecture._id} state={{lecture}}>More Details</Link>
        {console.log(lecture._id)}
      </div>
    ))}
    </>
  )

}

export default Index;