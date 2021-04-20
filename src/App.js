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
        const regName = new RegExp('([^\\s*]+)','g')
        const regLastName = new RegExp('([^\\s*]+)','g')
        const validName = regName.test(name.value)
        const validLastName = regLastName.test(lastName.value)

        if (validName && validLastName){
          this.data.name = name.value
          this.data.lastName = lastName.value
          this.statusModal = true
        }
        
        if (!validName) {
          name.nextElementSibling.classList.remove('novisible')
          name.value = ''
        } else {
          name.nextElementSibling.classList.add('novisible')
        }
        
        if (!validLastName) {
          lastName.nextElementSibling.classList.remove('novisible')
          lastName.value = ''
        } else {
          lastName.nextElementSibling.classList.add('novisible')
        }
      },
      closeModal() {
        this.data.name = ''
        this.data.lastName = ''
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

