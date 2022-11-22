import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import { MapContainer, TileLayer } from "react-leaflet";
import { ArrowLeftOutlined } from "@ant-design/icons";

import LocationMarker from "views/shared/LocationMarker";
import { DEFAULT_LOCATION } from "constants/globals";
import useContainer from "./hook";
import "antd/dist/antd.min.css";
import "../antdStyles.scss";
import "leaflet/dist/leaflet.css";
import "./style.scss";

const LocationMapModal = ({ onClose, draggable, showCurrenPosition, position }) => {
    const { handleSave, handleBack, onChangeLocation, location } = useContainer({ onClose, position });
    return (
        <Modal
            open
            width={1068}
            height={736}
            onCancel={onClose}
            centered
            mask={false}
            title={
                <div className='header'>
                    {!showCurrenPosition && <Button className='backButton' onClick={handleBack}><ArrowLeftOutlined /></Button>}
                    <p className='title'>Transparenterra community map</p>
                </div>
            }
            className='selectLocationModal'
            footer ={
                draggable && (
                    <div className='modalFooter'>
                        <Button className='saveButton' onClick={handleSave}>
                            Save
                        </Button>
                    </div>
           )}
        >
            <div className='modalContent'>
                <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={true} className='mapContainer'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker
                        showCurrenPosition={showCurrenPosition}
                        draggable={draggable}
                        onChangeLocation={onChangeLocation}
                        position={location}
                    />
                </MapContainer>
            </div>
        </Modal>
    );
};

LocationMapModal.defaultProps = {
    onClose: undefined,
    showCurrenPosition: true,
    position: DEFAULT_LOCATION,
};

LocationMapModal.propTypes = {
    onClose: PropTypes.func,
    draggable: PropTypes.bool.isRequired,
    position: PropTypes.object,
    showCurrenPosition: PropTypes.bool,
};

export default LocationMapModal;