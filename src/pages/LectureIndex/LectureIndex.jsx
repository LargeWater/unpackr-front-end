import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material"
import { Button } from "@mui/material";
import styles from "./LectureIndex.module.css";


const Index = (props, user) => {
  console.log("PROPS: ", props)
  
  const posts = props.lectures.filter((lecture) =>
    lecture.author._id === props.user.profile
  )

  return (
    <div className={styles.cardContainer}>
    {props.lectures.map(lecture => (
      <div key={lecture._id}>
        <Box sx={{ width: 275 }} className={styles.box}>
          <Card variant="outlined" className={styles.cardDiv}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h4" component="div">
                {lecture.subject}
              </Typography>
              <Typography variant="body2">
                Takeaway: {lecture.takeaway}
                <br />
                Struggled with: {lecture.painpoint}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`/lectures/${lecture._id}`} key={lecture._id} state={{lecture}} >
                  Details
                  </Link>
                </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    ))}
    </div>
  )

}

export default Index;