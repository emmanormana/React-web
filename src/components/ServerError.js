// NOTE: Have just put this in the components folder for now rather than in a partials folder, etc
// Would recommend conversations open up about folder structure, especially at a project this size as it starts to grow,
// as now is a good time to consider structure before it gets too big and more difficult to refactor
import React from 'react'
import injectSheet from 'react-jss'

import cloud from '../icons/icons8-error-cloud-100.png'

const ServerError = ({ classes, message }) => (
  <div className={classes.wrapper}>
    <div className={classes.icon}>
      <img src={cloud} />
    </div>

    <div className={classes.text}>
      {message}
    </div>
  </div>
)

export default injectSheet({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    flex: 1
  },
  icon: {
    width: '100px'
  },
  text: {
    paddingLeft: '20px',
    lineHeight: '100px',
    fontSize: '26px'
  }
})(ServerError)
