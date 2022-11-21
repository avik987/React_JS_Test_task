import React from "react";
import { connect } from "react-redux";

import { hideModal } from "state/modals/actions";
import ModalRootComponent from "./component";

const ModalRoot = (props) => <ModalRootComponent {...props} />;

const mapStateToProps = (state) => ({
    modalType: state.modals.modalType,
    modalProps: state.modals.modalProps,
});

const mapDispatchToProps = {
    onClose: hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);