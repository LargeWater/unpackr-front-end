import { Button, Divider } from '@mui/material'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <div className={styles.container}>
      {!user ? (
        <>
      <h1><code>unpackr</code></h1>
      <h2><code>a simple way to reflect on lectures</code></h2>
      <h3><code>been here before?</code></h3>
      <Divider />
      <Link to="/login">
        <Button variant="contained" className={styles.landingBtn}>Login</Button>
      </Link>
      <Divider />
      <h3><code>new to unpackr?</code></h3>
      <Divider />
      <Link to="/signup">
        <Button variant="contained" className={styles.landingBtn}>Sign Up</Button>
      </Link>
      </>
      ) : (
        <>
        <h1><code>welcome back to unpackr</code></h1>
        <h3><code>reflecting on a lecture? <br />add it here</code></h3>
        <Link to="/add-lecture">
          <Button variant="contained" className={styles.landingBtn}>Add Lecture</Button>
        </Link>
        <Divider />
        <h3><code>check your previous lectures to <br />find something to work on</code></h3>
        <Link to="/lectures">
          <Button variant="contained" className={styles.landingBtn}>Lectures</Button>
        </Link>
        </>
      )}
    </div>
  )
}

export default Landing
