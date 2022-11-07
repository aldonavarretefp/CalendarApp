
import { Calendar, dateFnsLocalizer } from 'react-big-calendar' 
import {format, parse, startOfWeek, getDay} from 'date-fns'
import { enUS } from 'date-fns/locale'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from './..'


const locales = {
  'en-US': enUS,
}

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

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
      />
    </>
  )
}

export default CalendarPage