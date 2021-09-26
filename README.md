# react-custom-modal-ts

> Made with 🖤 by Felipe Almeida

[![NPM](https://img.shields.io/npm/v/react-custom-modal-ts.svg)](https://www.npmjs.com/package/react-custom-modal-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-modal-ts
```

## Usage

```tsx
import React, { Component } from 'react'

import CustomModal from 'react-custom-modal-ts'

class Example extends Component {
  render() {
    return (
    <>
      <CustomModal
        borderRadius={10}
        setModalOpen={toggleModal}
        modalVisible={modal}
      >
        <h1>CustomModal Example</h1>
      </CustomModal>

      <button onClick={handleOpenModal}>Open Modal</button>
    </>
    )
  }
}
```

## License

MIT © [fgalmeida](https://github.com/fgalmeida)
