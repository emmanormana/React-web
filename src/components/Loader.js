import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'

/**
 * Hooks. Because hooks are awesome. Everyone should use hooks :D
 * @param {*} props
 */
const Loader = ({ classes }) => {
  // TODO: Refactor is time allows, this definitely isn't the best way to achieve this effect. Was trying to do more complex stuff, but quite like this simple blink
  const cycleBlink = () => {
    // Update second blinker half as fast.
    let newval = blink + 1
    let newval2 = blink % 2 === 0 ? blink2 + 1 : blink2
    setBlink(newval > 12 ? 1 : newval)
    setBlink2(newval2 > 18 ? 13 : newval2)
  }

  const [blink, setBlink] = useState(1)
  const [blink2, setBlink2] = useState(13)

  useEffect(() => {
    let tmr = setTimeout(() => cycleBlink(), 100)

    return () => { clearTimeout(tmr) }
  })

  // Order is a little weird here, but this is how it was in the original svg that I rebuilt, so I decided to leave it this way
  // 1-12 = outer, 13-18 = inner, 999 = center
  return (
    <div className={classes.container}>
      <div className={classes.loadingBox}>
        <svg className={classes.blinkFade} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path className={blink2 === 16 ? 'blink' : ''} id='a1' d='M9.95 6.18 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 4 ? 'blink' : ''} id='a2' d='M3.71 9.43 a.77.77 0 1 1-.8.77.78.78 0 0 1 .8-.77' fill-rule='evenodd' />
          <path className={blink2 === 14 ? 'blink' : ''} id='a3' d='M7.17 11.27 a.77.77 0 1 1-.8.77.78.78 0 0 1 .8-.77' fill-rule='evenodd' />
          <path className={blink2 === 13 ? 'blink' : ''} id='a4' d='M9.83 12.81 a.65.65 0 1 1-.68.65.66.66 0 0 1 .68-.65' fill-rule='evenodd' />
          <path className={blink === 2 ? 'blink' : ''} id='a5' d='M6.8 15.06 a.5.5 0 1 1-.52.5.51.51 0 0 1 .52-.5' fill-rule='evenodd' />
          <path className={blink === 1 ? 'blink' : ''} id='a6' d='M9.76 15.91 a.42.42 0 1 1-.43.42.43.43 0 0 1 .43-.42' fill-rule='evenodd' />
          <path className={blink === 3 ? 'blink' : ''} id='a7' d='M4.37 12.77 a.65.65 0 1 1-.68.65.66.66 0 0 1 .68-.65' fill-rule='evenodd' />
          <path className={blink === 5 ? 'blink' : ''} id='a8' d='M4.49 6.44 a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 1 1 0-2.2' fill-rule='evenodd' />
          <path className={blink === 9 ? 'blink' : ''} id='a9' d='M15.2 6.44 a1.1 1.1 0 1 1-1.2 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 6 ? 'blink' : ''} id='a10' d='M6.87 4.09 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 8 ? 'blink' : ''} id='a11' d='M12.94 4.09 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink2 === 17 ? 'blink' : ''} id='a12' d='M12.57 7.81 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink2 === 18 ? 'blink' : ''} id='a13' d='M12.57 10.94 A1.1 1.1 0 1 1 11.42 12 a1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 10 ? 'blink' : ''} id='a14' d='M15.94 9.43 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 11 ? 'blink' : ''} id='a15' d='M15.2 12.27 a1.1 1.1 0 1 1-1.2 1.11 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 12 ? 'blink' : ''} id='a16' d='M12.94 14.46 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink2 === 15 ? 'blink' : ''} id='a17' d='M7.17 7.81 A1.1 1.1 0 1 1 6 8.91 a1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 7 ? 'blink' : ''} id='a18' d='M9.95 3.26 a1.12 1.12 0 0 1 1.15 1.1 1.15 1.15 0 0 1-2.29 0 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
          <path className={blink === 999 ? 'blink' : ''} id='a19' d='M9.95 9.09 a1.1 1.1 0 1 1-1.15 1.1 1.12 1.12 0 0 1 1.15-1.1' fill-rule='evenodd' />
        </svg>
      </div>

      <div className={classes.loadingText}>
        Loading...
      </div>
    </div>
  )
}

export default injectSheet({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  loadingBox: {
    height: '120px',
    width: '120px'
  },
  blinkFade: {
    '& path': {
      transition: 'all 200ms',
      fill: '#dc1a83',
      opacity: 1,
      // Blink only class
      '&.blink': {
        opacity: 0.5
      }
    }
  },
  loadingText: {
    fontSize: '42px',
    lineHeight: '120px'
  }
})(Loader)
