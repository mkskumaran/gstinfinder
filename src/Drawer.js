import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Svg from './Svg';
import './App.css';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class PersistentDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
	  anchor: 'left',
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" aria-label="Open drawer">
			  <Svg />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
               GST - CALC
              </Typography>
            </Toolbar>
          </AppBar>
          <main>	
            <div/>
				{this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default PersistentDrawer