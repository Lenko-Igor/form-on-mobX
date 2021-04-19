import React from 'react'

function Modal() {
  return (
    <div className="modal__wrapper">
      <section className="modal">
        <div className="modal__btn-wrap">
          <button className="madal__btn">
            <i className="far fa-times-circle"></i>
          </button>
        </div>
        <p className="modal__text">Здравствуйте,</p>
        <p className="modal__name">Igor Lenko</p>
      </section>
    </div>
  )
}

export default Modal