import { addHours } from 'date-fns'

export const events = [
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