import styles from './AddLecture.module.css';
import { useState, useRef, useEffect } from "react"
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function AddLecture(props) {
  const [formData, setFormData] = useState({
    subject: "",
    takeaway: "",
    painpoint: "",
  })

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
    props.handleAddLecture(formData)
  }

  return (
    <>
      <h1>Add a Lecture</h1>
      <form ref={formElement} onSubmit={handleSubmit} autoComplete='off' className={styles.form}>
        <TextField 
          type="text" 
          name="subject" 
          sx={{ width: "30ch", backgroundColor: "white"}}
          label="Subject"
          variant='filled'
          value={formData.subject} 
          onChange={handleChange} 
        />
        <TextField
          multiline
          maxRows={4}
          type="text" 
          name="takeaway" 
          sx={{ width: "30ch", backgroundColor: "white"}}
          label="Takeaway"
          variant='filled'
          value={formData.takeaway}
          onChange={handleChange} 
        />
        <TextField
          multiline
          maxRows={4}
          type="text" 
          name="painpoint"
          sx={{ width: "30ch", backgroundColor: "white"}}
          label="What did you struggle with?"
          variant='filled'
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

export default AddLecture