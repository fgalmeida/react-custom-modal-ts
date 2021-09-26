import styled from 'styled-components'

export const ModalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .exit-container {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #101010;
    }

    svg {
      cursor: pointer;
    }
  }
`
