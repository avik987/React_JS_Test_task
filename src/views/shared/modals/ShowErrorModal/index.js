import React from "react";
import PropTypes from "prop-types";
import {Button, Modal} from "antd";

import "antd/dist/antd.min.css";
import "../antdStyles.scss";
import "./style.scss";

const ShowErrorModal = ({ onClose, errorMessage }) => (
    <Modal
        open
        width={600}
        height={218}
        onCancel={onClose}
        centered
        mask={false}
        title='Error'
        className='showErrorModal'
        footer={
            <div className='footer'>
                <Button onClick={onClose} className='footerButton'>
                    Ok
                </Button>
            </div>
        }
    >
        <div className='modalContent'>
            <p className='message'>{errorMessage}</p>
        </div>
    </Modal>
)

ShowErrorModal.defaultProps = {
    onClose: undefined,
};

ShowErrorModal.propTypes = {
    onClose: PropTypes.func,
    errorMessage: PropTypes.string.isRequired,
};

export default ShowErrorModal;