import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const SearchResult = ({ item }, onAddressSelected) => {
    return (
        <TouchableOpacity onPress={() => onAddressSelected(item.description)}>
            <View style={styles.container}>
                <Text>{item.description}</Text>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.name}>
                            {item.types.map((x) => x)}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SearchResult;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12
    },
    content: {
        marginTop: 10,
        flex: 1
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20
    },
    time: {
        fontSize: 11,
        color: '#808080'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
