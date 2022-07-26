import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material"
import { Button } from "@mui/material";


const card = (props) => {
  <>
    <CardContent>
      <Typography variant="h5" component="div">
        {props.lecture.subject}
      </Typography>
      <Typography variant="body2">
        {props.lecture.takeaway}
        <br />
        {props.lecture.painpoint}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Details</Button>
    </CardActions>
  </>
}
export default function LectureCard() {
  return (
    <Box sx={{ minWidth: 275}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}
