import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './LectureDetails.module.css'
import { Button, Divider } from "@mui/material";


function LectureDetails (props) {
  console.log('intial props', props)
  const location = useLocation()

  const[lectureData, setLectureData] = useState(location.state.lecture)

  console.log("LOCATION: ", location.state.lecture)

  useEffect(() => {
    setLectureData(location.state.lecture)
  }, [location])

  return (
    <div className={styles.lecture}>
      <h1>{lectureData.subject}</h1>
      <h3>Takeaway: {lectureData.takeaway}</h3> 
      <h3>Struggled with: {lectureData.painpoint}</h3>
      <div>
        <Link
          state={location.state}
          to="/edit"
        >
          <Button variant="contained" className={styles.editBtn}>
            Edit
          </Button>
        </Link>
        <Divider />
        <Link to="/lectures">
          <Button variant="contained" className={styles.deleteBtn} onClick={() => props.handleDeleteLecture(location.state.lecture._id)}>
            Delete
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LectureDetails