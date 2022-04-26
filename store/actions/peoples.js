import * as t from '../types';

export const people = (obj) => {
    return (
        {
            type: t.VIEW_PEOPLE,
            payload: {
                data: obj
            }
        }
    )
}
