import React from 'react'

export const Small = React.memo( ({value}) => {

    console.log("Llamado!");
    //http?

    return (
        <small>
            {value}
        </small>
    )
})
