import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: props => (props.height ? props.height : '100vh'),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  },
})

function Banner(props) {
  const classes = useStyles(props)
  return (
    <BackgroundImage
      className={classes.header}
      fluid={props.backgrounds}
      durationFadeIn={50}
    >
      <div className='text-center'>{props.children}</div>
    </BackgroundImage>
  )
}

Banner.propTypes = {
  /**
   * array of backgrounds. The order matters
   */
  backgrounds: PropTypes.array.isRequired,
  /**
   * height of the banner. Default to 100vh
   */
  height: PropTypes.string,
}

export default Banner