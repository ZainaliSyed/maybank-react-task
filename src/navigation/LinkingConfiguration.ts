import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    PlaceSearch: {
                        screens: {
                            PlaceSearchScreen: 'PlaceSearch'
                        }
                    }
                }
            },
            NotFound: '*'
        }
    }
};

export default linking;
