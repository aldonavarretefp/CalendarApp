import React from 'react'

export const CalendarEvent = ({event}) => {
    const {title, user} = event;
    return (
        <>
            <strong className='fs-6'>
                {title} &nbsp;
            </strong>

            <span className='fw-lighter badge bg-primary text-wrap'>
               {user.name}
            </span>
        </>
    )
}
