import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getEvents, isEventsReady, count, getErrorMessage } from '../selectors'
import Icon from './Icon'
import titleIcon from '../icons/vivid-angle-top-left.svg'
import theme from '../style/theme'
import Event from './Event'

import Loader from './Loader'
import ServerError from './ServerError'

const Events = ({ classes, ready, events, count, eventsError }) => (
  <div className={classes.container}>
    <h3 className={classes.title}>
      <Icon className={classes.titleIcon} symbol={titleIcon} />
      Results{ready && `: ${count} events found`}
    </h3>
    {/* Admittedly the error handling here is my laziest task. My personal recommendation would be to reconsider using functional components in this context */}
    {/* and then make use of react's Error Boundaries. This combined with hooks would make for some very nicely written class based components where appropriate */}
    {/* Functionaly components are not ideal or suitable for all tasks as they are limited in certain aspects, however I did not want to include too much refactoring */}
    {/* as it is somewhat outside the scope of the challenge. Instead I chose to use a simple error rendering component which a flexible error message. */}
    {/* Of course the icon could also be dynamic too, but the logic would just be the same. */}
    {eventsError && <ServerError message={getErrorMessage(eventsError)} />}
    {!eventsError && !ready && <Loader />}
    {/* Tried to use React.Suspense here because it is just 10 bars of awesome, but turns out ReactDOMServer does not support suspense yet! O.o */}
    {/* I really wanted to use the maxDuration property of suspense to only show the loading wheel if the response was slow, but it was not to be */}
    {ready && (
      <div className={classes.tilesWrapper}>
        <div className={classes.tiles}>
          {events.map(event => <Event key={event.id} className={classes.tile} content={event} />)}
        </div>
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  ready: isEventsReady(state),
  events: getEvents(state),
  count: count(state.events.events),
  eventsError: state.events.error
})

export default compose(
  connect(mapStateToProps),
  injectSheet({
    title: {
      paddingLeft: 20,
      position: 'relative'
    },
    titleIcon: {
      position: 'absolute',
      left: 0,
      top: 5
    },
    tilesWrapper: {
      margin: [0, 'auto'],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        maxWidth: theme.maxTileWidth * 2 + theme.gutter
      },
      '@media (min-width: 1200px)': {
        maxWidth: theme.maxTileWidth * 3 + theme.gutter * 2
      }
    },
    tiles: {
      '@media (min-width: 768px)': {
        marginLeft: -theme.gutter / 2,
        marginRight: -theme.gutter / 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }
    },

    tile: {
      margin: [0, 'auto', theme.gutter],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        marginLeft: theme.gutter / 2,
        marginRight: theme.gutter / 2,
        width: `calc(50% - ${theme.gutter}px)`
      },
      '@media (min-width: 1200px)': {
        width: `calc(${100 / 3}% - ${theme.gutter}px)`
      }
    }
  })
)(Events)
