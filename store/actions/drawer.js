import * as t from '../types';

export const toggleDrawer = (status) => {
    return (
        {
            type: t.TOGGLE_DRAWER,
            payload: {
                data: status
            }
        }
    )
}
