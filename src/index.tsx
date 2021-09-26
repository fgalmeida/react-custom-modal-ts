import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

import { Container } from "./styles";

interface CustomModalProps extends React.AllHTMLAttributes<HTMLDivElement> {
  borderRadius: number;
  modalVisible: boolean;
  setModalOpen: () => void;
}

const CustomModal = ({
  modalVisible,
  borderRadius,
  setModalOpen,
  ...rest
}: CustomModalProps) => {

  const [visible, setVisible] = useState(false);

  const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        color: "#000000",
        borderRadius: borderRadius + "px",
        border: "none",
        boxShadow: "0px 0px 20px rgba(54, 63, 78, 0.2)",
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
  };

  useEffect(() => {
    setVisible(modalVisible);
  }, [modalVisible]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setModalOpen}
      isOpen={visible}
      ariaHideApp={false}
      style={customStyles}
    >
      <Container>
        {rest.children}
      </Container>
    </ReactModal>
  );
};

export default CustomModal;
