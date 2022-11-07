
import { Calendar } from 'react-big-calendar' 
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesESPANOL, localizer } from '../../helpers'
import { Navbar, CalendarEvent } from './..'

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
  },
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
]


const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected})
    const style = {
      backgroundColor: '#2596be',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    };
  }

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
        popup
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}

export default CalendarPage