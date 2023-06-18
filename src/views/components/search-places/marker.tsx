import React from 'react';
import { Marker } from 'react-native-maps';
import { Image, StyleSheet } from 'react-native';
import { MARKER_IMAGE } from '../../../constants/Maps';

const MapMarker = ({ coordsChanged, coords, baseCoords }) => {
    return (
        <>
            <Marker
                coordinate={{
                    latitude: coordsChanged
                        ? coords[0].geometry.location.lat
                        : baseCoords.latitude,
                    longitude: coordsChanged
                        ? coords[0].geometry.location.lng
                        : baseCoords.longitude
                }}
                title="I'm Here !!"
            >
                <Image
                    style={styles.icon}
                    source={{
                        uri: MARKER_IMAGE
                    }}
                />
            </Marker>
        </>
    );
};

export default MapMarker;

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40
    }
});
