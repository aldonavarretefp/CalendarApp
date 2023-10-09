import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños del jefe 1',
  start: addHours(new Date(), -24),
  end: new Date(),
  notes: 'Comprar el pastel',
  user: {
      _id: '123',
      name: 'Carlos',
  },
  bgColor: '#f3af32',
};

const initialState = {
    events: [
      tempEvent
    ],
    activeEvent: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map( (arrEvent) => {
        if (arrEvent._id === payload._id) {
          return payload;
        }

        return arrEvent;
      });
    },
    onDeleteEvent: (state) => {
      if (!state.activeEvent) return;
      state.events = state.events.filter( (arrEvent) => arrEvent._id !== state.activeEvent._id);
      state.activeEvent = null;
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;