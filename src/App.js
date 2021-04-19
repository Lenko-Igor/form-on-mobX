import React from 'react'
import { observer, useLocalObservable } from 'mobx-react'
import Form from './components/Form.js'
import Modal from './components/Modal.js'

const App = observer(() => {

  const store = useLocalObservable(() => {
    return {
      statusModal: false,
      data: {
        name: 'Vasa',
        lastName: 'Pupcin',
      },

      openModal(name, lastName) {
        const reg = new RegExp('([^\\s*]+)','g')

        if (!reg.test(name.value)) {
          name.nextElementSibling.classList.remove('novisible')
          name.value = ''
        } else {
          name.nextElementSibling.classList.add('novisible')
          this.data.name = name.value
        }
        
        if (!reg.test(lastName.value)) {
          lastName.nextElementSibling.classList.remove('novisible')
          lastName.value = ''
        } else {
          lastName.nextElementSibling.classList.add('novisible')
          this.data.lastName = lastName.value
        }
        
        if (reg.test(name.value) && reg.test(lastName.value)){
          this.statusModal = true
        }
      },
      closeModal() {
        this.statusModal = false
      },
    }
  })



  return (
    <div className="wrapper">
      { 
        ( store.statusModal ) 
          ? <Modal close={ store.closeModal } data={ store.data }/> 
          : <Form open={ store.openModal }/>
      }
    </div>

  );
})

export default App;

