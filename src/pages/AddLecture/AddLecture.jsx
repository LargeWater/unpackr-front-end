import styles from './AddLecture.module.css';
import { useState, useRef, useEffect } from "react"

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
    props.addLecture(formData)
  }

  return (
    <>
      <h1>Add a Lecture</h1>
      <form ref={formElement} onSubmit={handleSubmit}>
        <label>Subject:</label>
        <input type="text" name="subject" onChange={handleChange} />
        <label>Takeaway:</label>
        <input type="text" name="takeaway" onChange={handleChange} />
        <label>What did you struggle with?:</label>
        <input type="text" name="painpoint" onChange={handleChange} />
        <button type="submit" disabled={!validForm}>Add Lecture</button>
      </form>
    </>
  )
}

export default AddLecture