import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';


function LectureDetails (props) {
  console.log('Lecture PROPS: ', props)
  const location = useLocation()
  const[lecture, setLecture] = useState(location.state.lecture)

  console.log("LOCATION: ", location.state.lecture)

  useEffect(() => {
    setLecture(location.state.lecture)

  }, [location])

  return (
    <>
      <h1>{lecture.subject}</h1>
      <p>{lecture.takeaway}</p> 
      <p>{lecture.painpoint}</p>

    </>
  )
}

export default LectureDetails