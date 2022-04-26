import * as t from '../types';

const initialState = [
    {
        id: 1,
        name: "Precious Adeyinka",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "precious-adeyinka",
        img: "/assets/img/avatars/me.png",
        gender: "male"
    },
    {
        id: 2,
        name: "Moses Jgaba",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "moses-jagaba",
        img: "/assets/img/avatars/me.png",
        gender: "male"
    },
    {
        id: 3,
        name: "Mide Ogundijo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "mide-ogundijo",
        img: "/assets/img/avatars/me.png",
        gender: "male"
    },
    {
        id: 4,
        name: "Uyi Ebhuoma",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "uyi-ebhouma",
        img: "/assets/img/avatars/me.png",
        gender: "female"
    },
    {
        id: 5,
        name: "Prince Bright",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "prince-bright",
        img: "/assets/img/avatars/me.png",
        gender: "female"
    },
    {
        id: 6,
        name: "Tonye Harry",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        nickname: "tonye-harry",
        img: "/assets/img/avatars/me.png",
        gender: "female"
    },
];

const people = (state=initialState, action) => {
    switch(action.type) {
        case t.VIEW_PEOPLE:
            return [...state, ...action.payload.data]
            break;
        default:
            return [...state]
            break;
    }
};

export default people;