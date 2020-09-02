import { useState, useEffect } from "react"
import { getGiphy } from "../helpers/getGiphys";

export const useFetchGiphy = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        getGiphy( category ).then( imgs => {
            setstate({
                data: imgs,
                loading: false
            });
        })
    }, [category])

    return state;
}
