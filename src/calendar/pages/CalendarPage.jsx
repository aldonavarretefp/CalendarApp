import { useState, memo } from 'react';
import { Calendar } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesESPANOL, localizer } from '../../helpers'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from './..'
import { useCalendarStore, useUiStore } from '../../hooks';

const CalendarPage = () => {

  const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month');

  const { events, setActiveEvent } = useCalendarStore();

  const {
    openDateModal
  } = useUiStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#2596be',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    };
  };

  const onDoubleClickEvent = () => {
    openDateModal();
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }

  const onSelectEvent = (event) => {
    setActiveEvent(event);
  }


  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={ { height: 'calc(100vh - 80px)' } }
        messages={ getMessagesESPANOL() }
        eventPropGetter={ eventStyleGetter }
        popup
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClickEvent }
        defaultView= { lastView }
        onView = { onViewChanged }
        onSelectEvent={ onSelectEvent }
      />
      <CalendarModal />
      <FabAddNew/>
      <FabDelete/>
    </>
  )
}

export default CalendarPage