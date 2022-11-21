import React from "react";
import PropTypes from "prop-types";

import MODAL_COMPONENTS from "views/ModalRoot/modalComponents";

const ModalRoot = ({ modalType, modalProps, onClose }) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal onClose={onClose} {...modalProps} />;
};

ModalRoot.defaultProps = {
    modalType: null,
    modalProps: {},
};

ModalRoot.propTypes = {
    modalType: PropTypes.string,
    modalProps: PropTypes.shape(),
    onClose: PropTypes.func.isRequired,
};

export default ModalRoot;