export const events = [
  {
    id: '1',
    title: 'Cumpleaños de Camilo',
    notes: 'Hay que comprar el pastel de Camilo.',
    start: new Date('2022-08-20 08:00:00'),
    end: new Date('2022-08-20 20:00:00'),
  },
  {
    id: '2',
    title: 'Cumpleaños de Melissa',
    notes: 'Hay que comprar el pastel de Melissa.',
    start: new Date('2022-02-09 08:00:00'),
    end: new Date('2022-02-09 20:00:00'),
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};
export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
