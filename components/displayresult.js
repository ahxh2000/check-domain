import React from 'react'

const Displayresult = ({domain}) => {
    return (
        <>
       {/* { console.log('domain==',domain)} */}
            <p>available:{domain.available ? 'True' : 'False'}</p>
            {
                !domain.available && (
                    <>
                        <p>creation_datetime:{domain.creation_datetime}</p>
                        <p>info:<br />{domain.info}</p>
                    </>
                )
            }
        </>
    )
}

export default Displayresult
