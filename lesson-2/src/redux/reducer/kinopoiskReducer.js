import { getAllKinoposk } from "../../API"




const initialState = {
    inLoadig: false,
    kinopoisArr: [],
}
const ADD_KINOPOISK_ARR = 'ADD_KINOPOISK_ARR'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'


const kinopoiskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_KINOPOISK_ARR:
            return {
                ...state,
                kinopoisArr: action.kinopoisArr
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}
const setKinopoiskArr = (kinopoiskArr) => ({ type: ADD_KINOPOISK_ARR, kinopoiskArr })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const AllKino = () => (dispatch) => {
    dispatch(toggleIsLoading(true))

    getAllKinoposk.getAllKino()
        .then(data => dispatch(setKinopoiskArr(data)))
}

export default kinopoiskReducer;