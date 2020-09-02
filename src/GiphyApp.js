import React, { Fragment, useState } from 'react'
import Addcategory from './Components/AddCategory';
import { GhiphyGrid } from './Components/GhiphyGrid';

const GiphyApp = () => {

    const [categories, setcategories] = useState(['Naruto']);

    return ( 
        <Fragment>

            <div className="w-full bg-indigo-500 py-2">
                <h2 className="text-3xl font-semibold text-center text-white">GiphyApp</h2>
            </div>

            <Addcategory setcategories= { setcategories }/>

            <ol className="pl-8 list-decimal">
                {
                    categories.map( category => ( <GhiphyGrid
                                                  key={ category } 
                                                  category={ category } /> ))
                }
            </ol>

        </Fragment>
     )
}
 
export default GiphyApp;