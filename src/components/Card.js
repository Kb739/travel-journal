import React from 'react'

export default function card(props) {
    return (
        <section className='card'>
            <img className='cover-img' src={props.imageUrl} alt='location' />
            <div className='info'>
                <div className='loc'>
                    <img className="loc-icon" src={require('../images/map-marker.png')} alt='locationIcon' />
                    <h3>{props.location}</h3>
                </div>
                <h1 className="title">{props.title}</h1>
                <h3 className="duration">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
        </section>
    )
}