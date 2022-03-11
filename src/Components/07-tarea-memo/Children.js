import React, { memo } from 'react'

export const Children = memo( ({ num, increment }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( num ) }
        >
            { num }
        </button>
    )
})
