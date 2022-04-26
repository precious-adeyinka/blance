import * as t from '../types';

export const viewUserProfile = (obj) => {
    return (
        {
            type: t.VIEW_USER_PROFILE,
            payload: {
                data: obj
            }
        }
    )
}
