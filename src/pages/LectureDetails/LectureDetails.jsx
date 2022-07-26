import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';


function LectureDetails ({lecture}) {
  const location = useLocation()

  const[lectureData, setLectureData] = useState(location.state.lecture)

  console.log("LOCATION: ", location.state.lecture)

  useEffect(() => {
    setLectureData(location.state.lecture)
  }, [location])

  return (
    <>
      <h1>{lectureData.subject}</h1>
      <p>{lectureData.takeaway}</p> 
      <p>{lectureData.painpoint}</p>
    </>
  )
}

export default LectureDetails