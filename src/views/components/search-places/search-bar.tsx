import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/Layout';

import { Searchbar as SearchBarMaterial } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '../../../state/ducks/places-search/actions';
import { RootState } from '../../../state/ducks/places-search';

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(fetchPlaces(newValue));
        onSearch(true);
    };

    return (
        <View style={styles.subcontainer}>
            <SearchBarMaterial
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={handleChange}
                value={value}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40
    },
    subcontainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    searchbar: {
        width: SIZES.width / 1.2
    }
});
