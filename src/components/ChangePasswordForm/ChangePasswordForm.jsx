import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import * as authService from '../../services/authService'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <TextField
          type="password"
          autoComplete="off"
          sx={{ width: "30ch", backgroundColor: "white"}}
          id="password"
          label="Current Password"
          variant='filled'
          value={pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <TextField
          type="password"
          autoComplete="off"
          sx={{ width: "30ch", backgroundColor: "white"}}
          id="newPassword"
          label="New Password"
          variant='filled'
          value={newPw}
          name="newPw"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <TextField
          type="password"
          autoComplete="off"
          sx={{ width: "30ch", backgroundColor: "white"}}
          id="newPasswordConf"
          label="Confirm New Password"
          variant='filled'
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <Button variant="contained" disabled={isFormInvalid()} className={styles.button}>
          Change Password
        </Button>
        <Link to="/">
          <Button variant='contained'>Cancel</Button>
        </Link>
      </div>
    </form>
  )
}

export default ChangePasswordForm
