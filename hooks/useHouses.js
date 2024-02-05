import {useState} from 'react'
import loadingStatus from '@/helpers/loadingStatus';
import houseArray from '../public/houses'
// import { useState } from 'react';


const useHouses = () => {

    const [houses, setHouses] = useState(houseArray);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading)
   
        // useEffect( () => {
        //     try {
                
        //         const fetchHouses = async () => {
        //         const response = await fetch('/api/houses');
        //         const houses = await response.json();
        //         setHouses(houses);
        //         setLoadingState(loadingStatus.loaded)
        //     };
        //     fetchHouses();
        //     } catch (error) {
        //         setLoadingState(loadingStatus.hasErrored)

        //     }
           
        // }, []);

    // setHouses(houseArray);
    return { houses, setHouses, loadingState };
};

export default useHouses;