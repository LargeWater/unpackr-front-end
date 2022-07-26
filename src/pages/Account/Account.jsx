import styles from './Account.module.css'
import { Button } from "@mui/material";
import ChangePassword from "../ChangePassword/ChangePassword";


const Account = ({user, handleLogout})=> {
  return (
  <div className={styles.account}>
    <ChangePassword user={user} />
    <Button variant="contained" className={styles.logoutBtn} onClick={handleLogout}> Log Out</Button>
  </div>
)}

export default Account;