/**
 * Return true if the ID of this event ID is in the favourites list
 * @param {Array<Favourites>} state Pass in only the list of favourites as this is all we need
 * @param {Number} id The ID for the current event we want to check
 */
export const isFavouritedSelector = (state, id) => state.favourites.includes(id)
