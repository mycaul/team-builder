import React from 'react'

export default function Associate(props){
    const {details} = props
    
    if (!details) {
        return <h3>Hold up - deets coming soon!</h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}