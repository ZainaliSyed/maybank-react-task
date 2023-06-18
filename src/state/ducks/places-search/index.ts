import reducer from './reducers';

import * as searchPlacesOperations from './operations';

export { searchPlacesOperations };

export type RootState =ReturnType<typeof reducer>;

export default reducer;
