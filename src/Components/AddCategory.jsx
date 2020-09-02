import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'

function Addcategory({ setcategories }) {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setcategories( categorys => [ inputValue, ...categorys ] );
            setinputValue('');
        }
      
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="flex justify-center">
                <input 
                type="text"
                value={ inputValue }
                placeholder="Search..."
                onChange={ handleInputChange } 
                className="mt-4 w-full h-10 pl-4 border-2 border-gray-300 rounded-full shadow-lg placeholder-black focus:outline-none focus:bg-gray-300 focus:text-black max-w-6xl"
                />
            </div>
        </form>
    )
}

Addcategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
}

export default Addcategory;

