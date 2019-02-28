// TODO I would suggest a refactor as there is quite a bit of repeated code here from the events call.
//      Would recommended unifying the calls and allow all the data processing and error handling to be done in one location.
//      This would also force all end points to act the same on the server side as they will required to also return the same format!
//      This would decrease code reptition and also increase code stability :)

/* global fetch:false */
import get from 'lodash/get'
import { fetchFavouritesActionCreator, TOGGLE_FAVOURITE_TYPE, REHYDRATED, toggleFavouriteActionFetchCreator } from '../actions'
import { getFavouritesApiUrl, isFavouritedSelector } from '../selectors'

export const toggleFavourites = async (apiUrl, favouriteId, method) => {
  let url = `${apiUrl}/${favouriteId}`

  const response = await fetch(url, { method }, {
    headers: {
      Accept: 'application/json'
    }
  })

  // TODO, I don't like that the array is on the root with no informative path, so would suggest refactoring to at least be consistent with events end point
  const favourites = await response.json()

  if (!response.ok || !favourites) {
    // TODO: Should handle error appropriately for this endpoint, but as the endpoints are not consistent anyway, this is outside the scope of this challenge
    const error = new Error(get(favourites, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

/**
 * Fetch the favourites from the server
 * @param {String} apiUrl API Endpoint for the call we want
 */
const fetchFavourites = async (apiUrl) => {
  let url = apiUrl

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  })

  // TODO, I don't like that the array is on the root with no informative path, so would suggest refactoring to at least be consistent with events end point
  const favourites = await response.json()

  if (!response.ok || !favourites) {
    // TODO: Should handle error appropriately for this endpoint, but as the endpoints are not consistent anyway, this is outside the scope of this challenge
    const error = new Error(get(favourites, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

export default store => next => action => {
  const ret = next(action)

  switch (action.type) {
    case REHYDRATED: {
      const state = store.getState()
      const apiUrl = getFavouritesApiUrl(state)

      store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
      break
    }
    case TOGGLE_FAVOURITE_TYPE: {
      const state = store.getState()
      const apiUrl = getFavouritesApiUrl(state)
      const { payload: { entityId } } = action
      const method = isFavouritedSelector(state.favourites, entityId) ? 'DELETE' : 'PUT'

      store.dispatch(toggleFavouriteActionFetchCreator(toggleFavourites(apiUrl, entityId, method)))
      break
    }
  }

  return ret
}
