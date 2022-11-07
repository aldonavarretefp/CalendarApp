
import { Calendar } from 'react-big-calendar' 
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesESPANOL, localizer } from '../../helpers'
import { Navbar } from './..'

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  }
]


const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesESPANOL()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}

export default CalendarPage