import React from 'react'
import PropTypes from 'prop-types'


function Modal({close, data}) {
 
  return (
    <div className="modal__wrapper">
      <section className="modal">
        <div className="modal__btn-wrap">
          <button 
            className="madal__btn" 
            onClick={(event) => {
              event.preventDefault()
              close() 
              }
            }>
            <i className="far fa-times-circle"></i>
          </button>
        </div>
        <p className="modal__text">Здравствуйте,</p>
        <p className="modal__name">{`${data.name} ${data.lastName}`}</p>
      </section>
    </div>
  )
}

Modal.propTypes = {
  close: PropTypes.func,
  data: PropTypes.object,
}

export default Modal