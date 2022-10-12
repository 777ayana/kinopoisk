import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllKinopoisk } from './../../redux/reducer/kinopoiskReducer';

const Home = () => {
    const dispatch = useDispatch()
    // const kinopoisk = useSelector(state => state)
    // const isLoading = useSelector(state => state.films.isLoading)
    // console.log(kinopoisk);

    useEffect(() => {
        dispatch(AllKinopoisk())
        console.log('успешный запрос');
    }, [])

    return (
        <div>




        </div>
    );
};

export default Home;