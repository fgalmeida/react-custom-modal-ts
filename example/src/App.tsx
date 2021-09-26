import React, { useState } from 'react'

import CustomModal from 'react-custom-modal-ts'
import 'react-custom-modal-ts/dist/index.css'

import { IoIosClose } from "react-icons/io"

import { ModalContainer } from './styles'

const App = () => {
  const [modal, setModal] = useState(false)

  // Modal

  function handleOpenModal() {
    setModal(true)
  }

  function toggleModal() {
    setModal(!modal)
  }

  return (
    <>
      <CustomModal
        borderRadius={5}
        setModalOpen={toggleModal}
        modalVisible={modal}
      >
        <ModalContainer>
          <div className='exit-container'>
            <h1>Example</h1>
            <IoIosClose onClick={toggleModal} size={36} color={'black'} />
          </div>
          <div className='image-container'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpulpbits.net%2Fwp-content%2Fuploads%2F2014%2F01%2FTabby-Cat-Images-728x988.jpg&f=1&nofb=1" alt="example" width={200} height={300} />
          </div>
        </ModalContainer>
      </CustomModal>

      <button onClick={handleOpenModal}>Open Modal</button>
    </>
  )
}

export default App
