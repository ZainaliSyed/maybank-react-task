import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function useGetCoordinates() {
    const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
    useEffect(() => {
        getCoordinates();
    }, []);

    const getCoordinates = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords);
    };
    return coords;
}
