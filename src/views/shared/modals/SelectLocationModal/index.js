import React from "react";
import PropTypes from "prop-types";
import {Button, Modal} from "antd";
import { MapContainer, TileLayer } from "react-leaflet";

import SelectLocationMarker from "views/shared/SelectLocationMarker";
import { DEFAULT_LOCATION } from "constants/globals";
import useContainer from "./hook";
import "antd/dist/antd.min.css";
import "../antdStyles.scss";
import "leaflet/dist/leaflet.css";
import "./style.scss";

const { lat, lng } = DEFAULT_LOCATION;

const SelectLocationModal = ({ onClose }) => {
    const { handleSave } = useContainer({ onClose });
    return (
        <Modal
            open
            width={1068}
            height={736}
            onCancel={onClose}
            centered
            mask={false}
            title='Transparenterra community map'
            className='selectLocationModal'
            footer={
                <div className='modalFooter'>
                    <Button className='saveButton' onClick={handleSave}>
                        Save
                    </Button>
                </div>
            }
        >
            <div className='modalContent'>
                <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true} className='mapContainer'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SelectLocationMarker />
                </MapContainer>
            </div>
        </Modal>
    );
};

SelectLocationModal.defaultProps = {
    onClose: undefined,
};

SelectLocationModal.propTypes = {
    onClose: PropTypes.func,
};

export default SelectLocationModal;