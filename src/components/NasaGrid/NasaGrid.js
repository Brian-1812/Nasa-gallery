import React from 'react'
import uuid from 'react-uuid'
import NasaGridItem from './NasaGridItem'
import Spinner from '../ui/Spinner'

const NasaGrid = ({items, isLoading}) => {
    return isLoading ? 
    <div className='center'><Spinner/></div> : 
    <section className='cards'>
        {items.map((item) => (
            <NasaGridItem item={item} key={uuid()} />
        ))}
    </section>
}

export default NasaGrid
