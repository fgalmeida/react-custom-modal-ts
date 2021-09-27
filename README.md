# react-custom-modal-ts

> Made with 🖤 by Felipe Almeida

[![NPM](https://img.shields.io/npm/v/react-custom-modal-ts.svg)](https://www.npmjs.com/package/react-custom-modal-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-modal-ts
```

## Usage

```tsx
import React, { useState } from 'react'

import CustomModal from 'react-custom-modal-ts'
import 'react-custom-modal-ts/dist/index.css'

const Example = () => {
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
        <h1>Example</h1>
        <div className='image-container'>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpulpbits.net%2Fwp-content%2Fuploads%2F2014%2F01%2FTabby-Cat-Images-728x988.jpg&f=1&nofb=1" alt="example" width={200} height={300} />
        </div>
      </CustomModal>

      <button onClick={handleOpenModal}>Open Modal</button>
    </>
  )
}
```

## License

MIT © [fgalmeida](https://github.com/fgalmeida)
