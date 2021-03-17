import './styles.css'

const Form = ({ formData, setFormData }) => {
  function handleChange(evt) {
    const value = evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: value
    });
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Awarded to</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={formData.name === '' && 'Name Surname'}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="course">for completing</label>
        <input
          id="course"
          name="course"
          placeholder={formData.course === '' && 'Creating PDFs with React & Make.cm'}
          value={formData.course}
          onChange={handleChange}
        />
      </div>

    </form>
  )
}

export default Form
