export const isEventsBusy = state => !!state.events.busy
export const getEvents = state => state.events.events
export const getEventsError = state => state.events.error
export const isEventsReady = state => !isEventsBusy(state) && getEvents(state).length > 0 && !getEventsError(state)

// TODO Move this into a more generic location, there is no need for this to be tied to the events when it could be used globally
// Not sure whether to return 0 or null or error when item is not array. Should be a group discussion in a real app.
export const count = item => Array.isArray(item) ? item.length : 0
