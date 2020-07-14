import React from 'react'
import spinner from '../../img/Spinner.gif'

const Spinner = () => {
    return (
       <img src={spinner} alt='Loading...' style={{width: '100px', margin: 'auto', diplay:'block'}} />
    )
}

export default Spinner
