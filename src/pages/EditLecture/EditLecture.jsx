import styles from './EditLecture.module.css';
import { useState, useRef, useEffect } from "react"
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';


function EditLecture(props) {
  console.log(props)
  const location = useLocation()
  console.log("EDIT LOCATION: ", location)
  const initialFormData = {
    ...location.state
  }
  const [formData, setFormData] = useState(initialFormData)

  const [validForm, setValidForm] = useState(false)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateLecture(formData)
  }
  console.log("intialFormData: ", initialFormData)
  console.log("formData: ", formData)

  return (
    <>
      <h1>Edit Lecture</h1>
      <form ref={formElement} onSubmit={handleSubmit} autoComplete='off' className={styles.form}>
        <TextField 
          type="text" 
          name="subject" 
          sx={{ width: "30ch"}}
          label="Subject"
          variant='outlined'
          value={formData.subject} 
          onChange={handleChange} 
        />
        <TextField
          multiline
          maxRows={4}
          type="text" 
          name="takeaway" 
          sx={{ width: "30ch"}}
          label="Takeaway"
          variant='outlined'
          value={formData.takeaway}
          onChange={handleChange} 
        />
        <TextField
          multiline
          maxRows={4}
          type="text" 
          name="painpoint"
          sx={{ width: "30ch"}}
          label="What did you struggle with?"
          variant='outlined'
          value={formData.painpoint}
          onChange={handleChange} 
        />
        <Button
          type="submit" 
          variant='contained'
          disabled={!validForm}
        >
          Add Lecture
        </Button>
      </form>
    </>
  )
}

export default EditLecture