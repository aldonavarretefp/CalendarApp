
import {useState} from 'React'
import { Calendar } from 'react-big-calendar' 
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesESPANOL, localizer } from '../../helpers'
import { Navbar, CalendarEvent } from './..'

const events = [
  {
    title: 'Cumpleaños del jefe 1',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe 2',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe 3',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe 4',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe 5',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Carlos',
    }
  },
  {
    title: 'Cumpleaños del jefe 6',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Comprar el pastel',
    user: {
      _id: '0',
      name: 'Aldo',
    }
  },
]


const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

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

  const onDoubleClickEvent = (e) => {
    console.log("Double click");
  }
  const onSelectEvent = (e) => {
    console.log("select event");
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e);
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
        onDoubleClickEvent={onDoubleClickEvent}
        onSelectEvent={onSelectEvent}
        defaultView= {lastView}
        onView = {onViewChanged}
      />
    </>
  )
}

export default CalendarPage