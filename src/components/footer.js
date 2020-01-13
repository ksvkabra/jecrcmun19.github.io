import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    backgroundImage: `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main}), url(/images/footer-bg.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  textColor: { color: theme.palette.font.primary },
  socialIcon: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.font.primary,
      color: theme.palette.primary.main,
    },
  },
}))

function Footer(props) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Paper className={classes.footer} square>
      <Grid container alignContent='center'>
        <Grid
          container
          component={Link}
          to='/'
          justify='center'
          className='my-10'
        >
          <img
            src='/images/munLogo.png'
            width='25px'
            className='mr-5'
            alt='MUN Logo'
          />
          <Typography
            className={classes.textColor}
            display='inline'
            variant='h5'
          >
            JECRC MUN 2020
          </Typography>
        </Grid>
        <Grid
          container
          justify='center'
          spacing={0}
          className={classes.textColor}
        >
          <Grid item md={2} sm={12} xs={12} />
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography
              variant='h6'
              style={{ color: theme.palette.primary.main }}
            >
              Address
            </Typography>
            <Typography>Shri Ram Ki Nangal,</Typography>
            <Typography>via Sitapura RIICO,</Typography>
            <Typography>Tonk Road, Jaipur</Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography
              variant='h6'
              style={{ color: theme.palette.primary.main }}
            >
              Contacts
            </Typography>
            <Typography>+91-999999999</Typography>
            <Typography>jecrcmun@jecrc.ac.in</Typography>
          </Grid>
          <Grid item md={2} sm={12} xs={12} />
        </Grid>
        <Grid container justify='center' className='mb-4'>
          <Grid item xs={12}>
            <hr
              width='70%'
              className='inline-flex border-dashed'
              style={{ borderColor: theme.palette.primary.main }}
            />
          </Grid>
          <Typography className={['text-center pt-1', classes.textColor]}>
            © Copyright JECRC MUN 2020
          </Typography>
        </Grid>
        <Grid container justify='center'>
          <Avatar className={['m-2', classes.socialIcon]}>
            <FacebookIcon />
          </Avatar>
          <Avatar className={['m-2', classes.socialIcon]}>
            <InstagramIcon />
          </Avatar>
          <Avatar className={['m-2', classes.socialIcon]}>
            <TwitterIcon />
          </Avatar>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer