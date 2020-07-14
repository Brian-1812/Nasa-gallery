import React from 'react'
import download from '../../img/download.png'

const NasaGridItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={item.img} alt='' />
                </div>
                <div className='card-back'>
                <h1>{item.title}</h1>
                <a href={item.img} download>
                    <img src={download} alt='download' style={{width:'50px', height:'50px'}}/>
                </a>
                <p><b>Location: </b>{item.location}</p>
                <p><b>Date created:</b> {item.date_created}</p>
                </div>
            </div>
        </div>
    )
}

export default NasaGridItem
