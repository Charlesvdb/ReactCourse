import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => {
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected option"
    >

        <h3>Selected option</h3>
        {props.selectedOption  && <p>{props.selectedOption}</p>}

        <button>OKAY</button>

    </Modal>
}

export default OptionModal