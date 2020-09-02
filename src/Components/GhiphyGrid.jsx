import React from 'react'
import { Ghiphygriditem } from './GhiphyGridItem';
import { useFetchGiphy } from '../hooks/useFetchGiphy';


export const GhiphyGrid = ( { category } ) => {

  
    const { data:imgs, loading } = useFetchGiphy( category );

  
    return (
        <>
                <h3 className="text-2xl font-bold text-center capitalize animate__animated animate__backInDown"> { category } </h3>
                { loading && <p className="text-2xl font-semibold text-center animate__animated animate__flash">loading...</p> }
    
            <div className="flex flex-row flex-wrap justify-center">
                {
                  imgs.map( img => (
                    <Ghiphygriditem
                    key={ img.id }
                    { ...img }
                    />
                    ))
                }
            </div>

        </>
    )
}
