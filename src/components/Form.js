import React from 'react'

function Form() {
  return (
    <section className="block__form">
      <form className="block__form-input" action="" id="formData">
        <input 
          className="block__form-name"
          type="text" 
          name="name" 
          id="name" 
          placeholder="Ваше имя"
          required
        />
        <input 
          className="block__form-lastName" 
          type="text" 
          name="lastName" 
          id="lastName" 
          placeholder="Ваша фамилия" 
          required/>
      </form>
      <button 
        className="block__form-button" 
        type="submit" 
        form="formData">
          готово
      </button>
    </section>
  )
}

export default Form