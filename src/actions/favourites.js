export const FETCH_FAVOURITES_TYPE = 'FETCH_FAVOURITES'
export const TOGGLE_FAVOURITE_TYPE = 'TOGGLE_FAVOURITE'
export const TOGGLE_FAVOURITE_FETCH_TYPE = 'TOGGLE_FAVOURITE_FETCH_TYPE'

export const fetchFavouritesActionCreator = promise => ({
  type: FETCH_FAVOURITES_TYPE,
  payload: promise
})

export const toggleFavouriteActionCreator = entityId => ({
  type: TOGGLE_FAVOURITE_TYPE,
  payload: { entityId }
})

export const toggleFavouriteActionFetchCreator = promise => ({
  type: TOGGLE_FAVOURITE_FETCH_TYPE,
  payload: promise
})
