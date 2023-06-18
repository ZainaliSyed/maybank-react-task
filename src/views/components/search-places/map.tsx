import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import useGetCoordinates from '../../../hooks/useGeolocation';
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import { RootState } from '../../../state/ducks/places-search';
import MapMarker from './marker';

const Maps = () => {
    const baseCoords = useGetCoordinates();
    const { coords = [] } = useSelector(
        (state: RootState) => state.searchPlaces.coords
    );
    const coordsChanged = coords.length > 0;
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                zoomEnabled
                zoomTapEnabled
                minZoomLevel={8}
                region={{
                    latitude: coordsChanged
                        ? coords[0].geometry.location.lat
                        : baseCoords.latitude,
                    longitude: coordsChanged
                        ? coords[0].geometry.location.lng
                        : baseCoords.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                <MapMarker
                    baseCoords={baseCoords}
                    coords={coords}
                    coordsChanged={coordsChanged}
                />
            </MapView>
        </View>
    );
};

export default Maps;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});
