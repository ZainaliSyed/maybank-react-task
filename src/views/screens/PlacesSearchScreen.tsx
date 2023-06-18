import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import Maps from '../components/search-places/map';
import SearchBar from '../components/search-places/search-bar';
import SearchResult from '../components/search-places/search-result';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoords } from '../../state/ducks/places-search/actions';
import { RootState } from '../../state/ducks/places-search';

export default function TabOneScreen({
    navigation
}: RootTabScreenProps<'PlaceSearch'>) {
    const maps = useSelector((state: RootState) => state.searchPlaces.places);
    const dispatch = useDispatch();
    const [showList, setShowList] = React.useState(false);

    const onAddressSelected = (address: string) => {
        dispatch(fetchCoords(address));
        setShowList(false);
    };

    const onSearch = (val) => {
        setShowList(val);
    };

    return (
        <View style={styles.container}>
            <Maps />
            <SearchBar onSearch={onSearch} />
            {showList && (
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={maps.places}
                    renderItem={(item) => SearchResult(item, onAddressSelected)}
                    keyExtractor={(item) => item.predictions}
                    ItemSeparatorComponent={() => {
                        return <View style={styles.separator} />;
                    }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    flatlist: {
        backgroundColor: '#fff',
        marginTop: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    }
});
