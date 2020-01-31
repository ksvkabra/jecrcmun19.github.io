import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CloseSharp from '@material-ui/icons/CloseSharp'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CollapseDropDown from './collapse'
import { Link } from 'gatsby'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
  },
  headerItems: {
    fontFamily: "'Rubik', sans-serif",
    paddingBottom: 0,
    color: '#FFF',
    paddingTop: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 'auto',
    backgroundColor: '#d90845',
    color: theme.palette.primary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
  close: {
    color: '#FFF',
  },
  listItem: {
    padding: 8,
    paddingLeft: 16,
  },
}))

function MobileViewDrawer(props) {
  const classes = useStyles()
  const [openDropDown, setOpenDropDown] = React.useState(false)

  const handleClick = () => {
    setOpenDropDown(!openDropDown)
  }

  const handleDropDownClose = () => {
    setOpenDropDown(false)
  }

  const { handleDrawerClose, open } = props

  useEffect(() => {
    if (!open) handleDropDownClose()
  }, [open])
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.close}>
            <CloseSharp className={classes.close} />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.headerItems}>
          {[
            { name: 'HOME', link: '/' },
            { name: 'ABOUT', link: '/about' },
            { name: 'COMMITTEES', link: '/committees' },
            {
              name: 'REGISTRATIONS',
              link: '#registrations',
            },
            { name: 'BLOGS', link: '#blogs' },
            { name: 'GALLERY', link: '/' },
            { name: 'CONTACT', link: '/contact' },
          ].map((text, index) => (
            <div key={index}>
              <ListItem
                button
                component={Link}
                to={text.link}
                onClick={() => (text === 'ABOUT' ? handleClick() : null)}
                className={classes.listItem}
              >
                <ListItemText primary={text.name} />
                {/* {text.name === 'ABOUT' ? (
                  openDropDown ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null} */}
              </ListItem>
              {text.name === 'ABOUT' ? (
                <CollapseDropDown
                  openDropDown={openDropDown}
                  handleDrawerClose={handleDrawerClose}
                  handleClick={handleClick}
                />
              ) : null}
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}

export default MobileViewDrawer
