import React from 'react'
import PropTypes from 'prop-types';

function Form({open}) {
  return (
    <section className="block__form">
      <form className="block__form-input" action="" id="formData">
        <input 
          className="block__form-name"
          type="text" 
          id="name" 
          placeholder="Ваше имя"
        />
        <p className="block__form-name-error novisible">Ошибка! Пустое поле. Введите имя</p>
        <input 
          className="block__form-lastName" 
          type="name" 
          id="lastName" 
          placeholder="Ваша фамилия" 
        />
        <p className="block__form-lastName-error novisible">Ошибка! Пустое поле. Введите фамилию</p>
      </form>
      <button 
        onClick={(event) => {
          event.preventDefault()
          const name = document.querySelector('#name')
          const lastName = document.querySelector('#lastName')
          open(name, lastName)
         }
        }
        className="block__form-button" 
        type="submit" 
        form="formData">
          готово
      </button>
    </section>
  )
}

Form.propTypes = {
  open: PropTypes.func,
}

export default Form